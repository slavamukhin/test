import { makeAutoObservable, action, observable, computed } from 'mobx'
import { api, EApiUrl } from '../api'
import queryString from 'querystring'
import { keycloakHeaders, KeycloakConfig, IAuthStore, AuthData, IAuthResponse } from './interfaces'

class AuthStore implements IAuthStore {
  @observable token = ''
  @observable loading = false
  @observable authError = {} as Error
  @observable login = ''
  @observable password = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getToken = async (data: AuthData) => {
    const {login, password} = data
    this.login = login
    this.password = password 
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
      const { access_token,  expires_in} = response.data
      this.authError = {} as Error
      this.token = access_token
      document.cookie = `token=${access_token}; path=/; max-age=${expires_in}; samesite=strict`
      document.cookie = `auth=true`
      this.loading = false
    } catch(error) {
      this.authError = error as Error
      this.loading = false
    }
  }
}

export const authStore = new AuthStore()