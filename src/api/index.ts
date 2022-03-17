import axios, { AxiosRequestConfig } from 'axios'
import { kc } from '../keycloak'
import { ENameCookie, getCookie } from '../utils'

axios.interceptors.response.use(
  function (config) {
    return config
  },
  function (error: any) {
    
    if (error.response.status === 403) {
      window.location.replace('/403')
    }

    if (error.response.status === 500) {
      window.location.replace('/500')
    }

    if (error.response.status === 404) {
      window.location.replace('/404')
    }

    return Promise.reject(error)
  }
)

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
  KEY = '/api/v1/keys/',
}
