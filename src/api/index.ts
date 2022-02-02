import axios, { AxiosRequestConfig } from 'axios'
import { ENameCookie, getCookie } from '../utils'

export const api = {
  get: (url: string, config?: any) => axios.get(url, {
    ...config,
    headers: { Authorization: `Bearer ${getCookie(ENameCookie.TOKEN)}` },
  }),
  post: (url: string, body: any, config?: AxiosRequestConfig): any => axios.post(url, body, {
    ...config,
    headers: { 
      Authorization: `Bearer ${getCookie(ENameCookie.TOKEN)}`,
   },
  }),
  put: (url: string, body: any, config?: AxiosRequestConfig): any => axios.put(url, body, {
    ...config,
    headers: { 
      Authorization: `Bearer ${getCookie(ENameCookie.TOKEN)}`,
      'x-entity-version': `${getCookie(ENameCookie.EDIT)}`
  },
  }),
  patch: () => {},
  delete: () => {},
  head: () => {},
  options: () => {}
}

export enum EApiUrl {
  KEYCLOAC = '/auth/realms/Uzcard/protocol/openid-connect/token/',
  API_LIST = '/api/v1/apis/',
  API_CREATE = '/api/v1/apis/',
  KEY_LIST = '/api/v1/keys/',
  KEY_CREATE = '/api/v1/keys/',
  API = '/api/v1/apis/'
} 
