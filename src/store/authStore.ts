import { makeAutoObservable, action, observable, computed } from 'mobx'
import { api, EApiUrl } from '../api'
import queryString from 'querystring'
import { keycloakHeaders, KeycloakConfig, IAuthStore, AuthData, IAuthResponse } from './interfaces'

class AuthStore implements IAuthStore {
  @observable token = ''
  @observable loading = false
  @observable authError = {} as Error

  constructor() {
    makeAutoObservable(this)
  }

  @action
  refreshToken = async (refrefh_token?: string): Promise<void> => {
    try {
      const response: IAuthResponse = await api.post(
        EApiUrl.KEYCLOAC,
        queryString.stringify({
          grant_type: KeycloakConfig.GRANT_TYPE_REFRESH,
          client_id: KeycloakConfig.CLIENT_ID,
          client_secret: KeycloakConfig.CLIENT_SECRET,
          refrefh_token: `${refrefh_token}`,
        }),
        {
          headers: keycloakHeaders
        }
      )
      const { access_token,  expires_in, refresh_token, refresh_expires_in} = response.data
      this.authError = {} as Error
      this.token = access_token
      document.cookie = `token=${access_token}; path=/; max-age=${expires_in}; samesite=strict`
      document.cookie = `refresh_token=${refresh_token}; max-age=${refresh_expires_in}; path=/; samesite=strict`
      this.loading = false
    } catch(error) {
      this.authError = error as Error
      this.loading = false
    }
  }

  @action
  getToken = async (data: AuthData): Promise<void> => {
    const {login, password} = data
    try {
      const response: IAuthResponse = await api.post(
        EApiUrl.KEYCLOAC,
        queryString.stringify({
          grant_type: KeycloakConfig.GRANT_TYPE,
          username: login,
          password: password,
          client_id: KeycloakConfig.CLIENT_ID,
          client_secret: KeycloakConfig.CLIENT_SECRET
        }),
        {
          headers: keycloakHeaders
        }
      )
      const { access_token,  expires_in, refresh_token, refresh_expires_in} = response.data
      this.authError = {} as Error
      this.token = access_token
      document.cookie = `token=${access_token}; path=/; max-age=${expires_in}; samesite=strict`
      document.cookie = `refresh_token=${refresh_token}; max-age=${refresh_expires_in}; path=/; samesite=strict`
      this.loading = false
    } catch(error) {
      this.authError = error as Error
      this.loading = false
    }
  }
}

export const authStore = new AuthStore()