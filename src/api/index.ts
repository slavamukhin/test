import axios from 'axios'

export const api = {
  get: () => {},
  post: (url: string, body: any, config: any): any => axios.post(url, body, config),
  put: () => {},
  patch: () => {},
  delete: () => {},
  head: () => {},
  options: () => {}
}

export enum EApiUrl {
  KEYCLOAC = 'https://keycloak-uzcards.dbp.inno.tech/auth/realms/Uzcard/protocol/openid-connect/token'
} 
