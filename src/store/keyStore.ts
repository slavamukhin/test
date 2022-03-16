import { makeAutoObservable, runInAction } from 'mobx'
import { api, EApiUrl } from '../api'
import { KeyObjectDto } from '../interfaces'
import { setCookie } from '../utils/cookie'

class KeyStore {
  key: KeyObjectDto = {} as KeyObjectDto
  pending = true
  data = false

  constructor() {
    makeAutoObservable(this)
  }

  getKey = (keyId: string): void => {
    this.data = false
    this.pending = true

    api
      .get(EApiUrl.KEY + keyId)
      .then((response) => {
        runInAction(() => {
          this.key = response.data
          this.data = true
        })
        setCookie('edit', response.headers['x-entity-version'], {
          path: '/',
          sameSite: 'strict',
        })
      })
      .catch((error) => console.error('error', error))
      .finally(() => {
        runInAction(() => {
          this.pending = false
        })
      })
  }

  cleanKey = () => {
    this.key = {} as KeyObjectDto
  }
}

export const keyStore = new KeyStore()
