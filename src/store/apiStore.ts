import { makeAutoObservable, action, observable, computed, toJS } from 'mobx'
import { api, EApiUrl } from '../api'
import { ApiObject } from '../interfaces'

class ApiStore {
  @observable api: ApiObject = {} as ApiObject
  @observable pendding = false
  @observable data = false
  
  constructor() {
    makeAutoObservable(this)
  }

  @action
  getApi = (apiId: string): void => {
    this.data = false
    this.pendding = true
    api
      .get(EApiUrl.API + apiId)
      .then((response) => {
        this.api = response.data
        this.data = true
        document.cookie = `edit=${response.headers['x-entity-version']};  path=/; samesite=strict`
      })
      .catch((error) => console.error('error', error))
      .finally(() => {
        this.pendding = false
      })
  }

  @action
  cleanApi = () => {
    this.api = {} as ApiObject
  }

  @computed get apiValues() {
    return this.api
  }
}

export const apiStore = new ApiStore()
