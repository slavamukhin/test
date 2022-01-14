import axios from 'axios'

export const api = {
  get: (url: string, config: any) => axios.get(url, config),
  post: (url: string, body: any, config?: any): any => axios.post(url, body, config),
  put: () => {},
  patch: () => {},
  delete: () => {},
  head: () => {},
  options: () => {}
}

const baseUrl: string = 'https://apimgmt-uzcards.dbp.inno.tech'

export enum EApiUrl {
  KEYCLOAC = 'https://keycloak-uzcards.dbp.inno.tech/auth/realms/Uzcard/protocol/openid-connect/token',
  API_LIST = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/apis/',
  KEY_LIST = 'https://apimgmt-uzcards.dbp.inno.tech/api/v1/keys'
} 
