import { makeAutoObservable, action, observable, computed, toJS } from 'mobx'
import { api, EApiUrl } from '../api'
import { KeyObjectDto } from '../interfaces'

class KeyStore {
  @observable key: KeyObjectDto = {} as KeyObjectDto
  @observable pending = false
  @observable data = false

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getKey = (keyId: string): void => {
    this.data = false
    this.pending = true
    api
      .get(EApiUrl.KEY + keyId)
      .then((response) => {
        this.key = response.data
        this.data = true
        document.cookie = `edit=${response.headers['x-entity-version']};  path=/; samesite=strict`
      })
      .catch((error) => console.error('error', error))
      .finally(() => {
        this.pending = false
        this.data = false
      })
  }

  @action
  cleanKey = () => {
    this.key = {} as KeyObjectDto
  }

  @computed get keyValues() {
    return this.key
  }
}

export const keyStore = new KeyStore()
