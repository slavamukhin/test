import { Option2 } from '@inno/ui-kit'
import { makeAutoObservable, runInAction } from 'mobx'
import { api, EApiUrl } from '../api'
import { ApiObject, VersionObject } from '../interfaces'

class ApiListStore {
  apiList: ApiObject[] = []
  loading = true
  data = false
  chosenApi = ''

  constructor() {
    makeAutoObservable(this)
  }

  chooseApi = (api: string): void => {
    this.chosenApi = api
  }

  getApiList = async (): Promise<void> => {
    this.loading = true
    try {
      const response = await api.get(EApiUrl.API_LIST)

      runInAction(() => {
        this.apiList = response.data
        this.loading = false
        this.data = true
      })
    } catch (err) {
      runInAction(() => {
        this.loading = false
        this.data = false
      })
      console.error(err)
    }
  }

  get availableApisList(): Array<Option2> {
    return this.apiList.map((api: ApiObject, index: number) => ({
      label: api.apiId,
      value: `${index}`,
    }))
  }

  get versionChosenApi(): Array<Option2> {
    const api = this.apiList.find((api) => api.apiId === this.chosenApi)
    return api?.versionData?.versions?.map(
      (version: VersionObject, index: number) => ({
        label: version.versionName as string,
        value: `${index}`,
      })
    ) as Array<Option2>
  }

  get isEmptyApiList() {
    return this.apiList.length < 1
  }

  get totalCount(): number {
    return this.apiList.length
  }
}

export const apiListStore = new ApiListStore()
