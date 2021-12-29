import { makeAutoObservable, action, observable, computed } from 'mobx'

class KeyStore {
  @observable key = 'key test'

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getKey = () => {
    this.key = 'click'
  }

  @computed
  get keyValue() {
    return this.key
  }
}

export const keyStore = new KeyStore()
