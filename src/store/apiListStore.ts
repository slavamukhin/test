import { ColumnsType } from '@inno/ui-kit/lib/Table/types'
import { makeAutoObservable, action, observable, computed, toJS } from 'mobx'
import { api, EApiUrl } from '../api'
import { ApiObject } from '../interfaces'

class ApiListStore {
  @observable apiList: ApiObject[] = []
  @observable loading = false
  constructor() {
    makeAutoObservable(this)
  }

  @action
  getApiList = async (token?: string): Promise<void> => {
    this.loading = true
    try {
      const response = await api.get(
        EApiUrl.API_LIST,
        {
          headers: { Authorization: `Bearer ${token}` }
        })
      this.apiList = response.data
      this.loading = false
    } catch (err) {
      this.loading = false
      console.error(err)
    }
    
  }

  @computed
  get columsApi (): ColumnsType<Record<string, boolean | string>> {
    return [
      {
        dataIndex: 'listenPath',
        sorter: true,
        title: 'listenPath',
      },
      {
        dataIndex: 'name',
        sorter: true,
        title: 'name',
      },
      {
        dataIndex: 'targetUrl',
        sorter: true,
        title: 'targetUrl',
      },
      {
        dataIndex: 'versionData',
        sorter: true,
        title: 'versionData',
      }
    ]
  }

  @computed
  get dataTableApi (): Record<string, any>[] {
    return this.apiList.map(api => (
      {
        listenPath: api.listenPath,
        name: api.name,
        key: api.apiId,
        targetUrl: api.targetUrl,
        versionData: api.versionData
      }
    ))
  }
}

export const apiListStore = new ApiListStore()
