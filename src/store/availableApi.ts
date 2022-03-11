import { ColumnsType } from '@inno/ui-kit/lib/Table/types'
import { makeAutoObservable, action, observable, computed } from 'mobx'
import { api, EApiUrl } from '../api'
import { AccessRightsObject, ApiObject } from '../interfaces'

class AvailableApi {
  @observable availableApiList: Array<AccessRightsObject> = []
  @observable editableApiName: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action
  addApi = (api: AccessRightsObject): void => {
    console.log(this.editableApiName)
    if (this.editableApiName) {
      this.availableApiList = this.availableApiList.filter(item => item.apiId !== this.editableApiName)
      this.availableApiList.push(api)
    } else {
      this.availableApiList.push(api)
    }
  }

  @action 
  setAllApi = (apiList: Array<AccessRightsObject>): void => {
    this.availableApiList = apiList
  }

  @action
  deleteApi = (id: string): void => {
    this.availableApiList = this.availableApiList.filter(api => api.apiId !== id)
  }

  @action
  clearAvailableApiList = (): void => {
    this.availableApiList = []
  }

  @action
  setEditableApiName = (apiName: string): void => {
    this.editableApiName = apiName
  }

  @computed
  get columsKey(): ColumnsType<Record<string, boolean | string>> {
    return [
      {
        dataIndex: 'name',
        sorter: true,
        title: '',
      },
    ]
  }

  @computed
  get dataTableKey(): Record<string, any>[] {
    return this.availableApiList.map((key, index) => ({
      name: key.apiId,
    }))
  }

  @computed
  get editableApiData():AccessRightsObject | undefined {
    return this.availableApiList.find(api => api.apiId === this.editableApiName)
  }
}

export const availableApi = new AvailableApi()
