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
        setCookie('edit', response.headers['x-entity-version'])
      })
      .catch((error) => console.error('error', error))
      .finally(() => {
        runInAction(() => {
          this.pending = false
        })
      })
  }

  cleanApi = () => {
    this.api = {} as ApiObject
  }
}

export const apiStore = new ApiStore()
