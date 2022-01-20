import { ColumnsType } from '@inno/ui-kit/lib/Table/types'
import { makeAutoObservable, action, observable, computed, toJS } from 'mobx'
import { api, EApiUrl } from '../api'
import { KeyShortDescriptionObjectDto } from '../interfaces'

class KeyStore {
  @observable keyList: KeyShortDescriptionObjectDto [] = []
  @observable loading = false

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getKeyList = async (): Promise<void> => {
    this.loading = true
    try {
      const response = await api.get(EApiUrl.KEY_LIST)
      this.keyList = response.data
      this.loading = false
    } catch (err) {
      this.loading = false
      console.log(err)
    }
    
  }

  @computed
  get columsKey (): ColumnsType<Record<string, boolean | string>> {
    return [
      {
        dataIndex: 'keyId',
        sorter: true,
        title: 'keyId',
      },
      {
        dataIndex: 'name',
        sorter: true,
        title: 'name',
      }
    ]
  }

  @computed
  get dataTableKey (): Record<string, any>[] {
    return this.keyList.map(key => (
      {
        keyId: key.keyId,
        name: key.name,
      }
    ))
  }
}

export const keyStore = new KeyStore()
