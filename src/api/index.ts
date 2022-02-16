import axios, { AxiosRequestConfig } from 'axios'
import { ENameCookie, getCookie } from '../utils'

export const api = {
  get: (url: string, config?: any) => axios.get(url, {
    ...config,
  }),
  post: (url: string, body: any, config?: AxiosRequestConfig): any => axios.post(url, body, {
   ...config,
  }),
  put: (url: string, body: any, config?: AxiosRequestConfig): any => axios.put(url, body, {
    headers: {
      'x-entity-version': `${getCookie(ENameCookie.EDIT)}`
  },
  ...config,
  }),
  patch: () => {},
  delete: () => {},
  head: () => {},
  options: () => {}
}

export enum EApiUrl {
  API_LIST = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/',
  API_CREATE = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/',
  KEY_LIST = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/keys/',
  KEY_CREATE = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/keys/',
  API = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/'
} 
