import { makeAutoObservable, runInAction } from 'mobx'
import { api, EApiUrl } from '../api'
import { ApiObject } from '../interfaces'
import { setCookie } from '../utils/cookie'

class ApiStore {
  api: ApiObject = {} as ApiObject
  pending = false
  data = false

  constructor() {
    makeAutoObservable(this)
  }

  getApi = (apiId: string): void => {
    this.data = false
    this.pending = true

    api
      .get(EApiUrl.API + apiId)
      .then((response) => {
        runInAction(() => {
          this.api = response.data
          this.data = true
        })
        
        setCookie('edit', response.headers['x-entity-version'], { path: '' })
      })
      .catch((error) => console.error('error', error))
      .finally(() => {
        runInAction(() => {
          this.pending = false
          this.data = false
        })
      })
  }

  cleanApi = () => {
    this.api = {} as ApiObject
  }

  get apiValues() {
    return this.api
  }
}

export const apiStore = new ApiStore()
