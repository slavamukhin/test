import { makeAutoObservable, action, observable, computed, toJS } from 'mobx'
import { api, EApiUrl } from '../api'
import { ApiObject } from '../interfaces'
import { setCookie } from '../utils/cookie'

class ApiStore {
  @observable api: ApiObject = {} as ApiObject
  @observable pending = false
  @observable data = false

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getApi = (apiId: string): void => {
    this.data = false
    this.pending = true
    api
      .get(EApiUrl.API + apiId)
      .then((response) => {
        this.api = response.data
        this.data = true
        setCookie('edit', response.headers['x-entity-version'], { path: '' })
      })
      .catch((error) => console.error('error', error))
      .finally(() => {
        this.pending = false
        this.data = false
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
