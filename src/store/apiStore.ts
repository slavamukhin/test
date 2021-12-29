import { makeAutoObservable, action, observable, computed } from 'mobx'

class ApiStore {
  @observable api = 'api test'

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getApi = () => {
    this.api = 'click'
  }

  @computed
  get apiValue() {
    return this.api
  }
}

export const apiStore = new ApiStore()
