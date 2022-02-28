import { makeAutoObservable, runInAction } from 'mobx'
import { api, EApiUrl } from '../api'
import { KeyShortDescriptionObjectDto } from '../interfaces'

class KeyListStore {
  keyList: KeyShortDescriptionObjectDto[] = []
  loading = true

  constructor() {
    makeAutoObservable(this)
  }

  getKeyList = async (): Promise<void> => {
    this.loading = true

    try {
      const response = await api.get(EApiUrl.KEY_LIST)

      runInAction(() => {
        this.keyList = response.data
      })
    } catch (err) {
      console.error(err)
    } finally {
      runInAction(() => {
        this.loading = false
      })
    }
  }

  get totalCount(): number {
    return this.keyList.length
  }
}

export const keyListStore = new KeyListStore()
