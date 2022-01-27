import axios, { AxiosRequestConfig } from 'axios'
import { ENameCookie, getCookie } from '../utils'

export const api = {
  get: (url: string, config?: any) => axios.get(url, {
    ...config,
    headers: { Authorization: `Bearer ${getCookie(ENameCookie.TOKEN)}` },
  }),
  post: (url: string, body: any, config?: AxiosRequestConfig): any => axios.post(url, body, {
    ...config,
    headers: { Authorization: `Bearer ${getCookie(ENameCookie.TOKEN)}` },
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

const baseUrl: string = 'https://apimgmt-uzcards.dbp.inno.tech'

export enum EApiUrl {
  KEYCLOAC = 'https://keycloak-uzcards.dbp.inno.tech/auth/realms/Uzcard/protocol/openid-connect/token/',
  API_LIST = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/',
  API_CREATE = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/',
  KEY_LIST = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/keys/',
  KEY_CREATE = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/keys/',
  API = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/'
} 
