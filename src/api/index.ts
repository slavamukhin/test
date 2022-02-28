import axios, { AxiosRequestConfig } from 'axios'
import { kc } from '../keycloak'
import { ENameCookie, getCookie } from '../utils'

export const api = {
  get: (url: string, config?: any) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${kc.token}` },
      ...config,
    }),
  post: (url: string, body: any, config?: AxiosRequestConfig): any =>
    axios.post(url, body, {
      headers: { Authorization: `Bearer ${kc.token}` },
      ...config,
    }),
  put: (url: string, body: any, config?: AxiosRequestConfig): any =>
    axios.put(url, body, {
      headers: {
        Authorization: `Bearer ${kc.token}`,
        'x-entity-version': `${getCookie(ENameCookie.EDIT)}`,
      },
      ...config,
    }),
  patch: () => {},
  delete: () => {},
  head: () => {},
  options: () => {},
}

export enum EApiUrl {
  API_LIST = '/api/v1/apis/',
  API_CREATE = '/api/v1/apis/',
  KEY_LIST = '/api/v1/keys/',
  KEY_CREATE = '/api/v1/keys/',
  API = '/api/v1/apis/',
  KEY = '/api/v1/keys/'
}
