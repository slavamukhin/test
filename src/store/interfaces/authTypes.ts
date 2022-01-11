export enum KeycloakConfig {
  GRANT_TYPE = 'password',
  CLIENT_ID = 'tashkent',
  CLIENT_SECRET = '49c1acdf-78fa-4abe-8b33-62261e4a6553'
}

export const keycloakHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

export type AuthData = Pick<IAuthStore, "login" | "password">

export interface IAuthStore {
  token: string
  loading: boolean
  authError: Error
  login: string
  password: string
  getToken: (data: AuthData) => void
}

export interface IAuthResponceData {
  access_token: string
  expires_in: number,
  refresh_expires_in: number,
  refresh_token: string
  token_type: string,
  "not-before-policy": number,
  session_state: string,
  scope: string
}
export interface IAuthResponse {
  data: IAuthResponceData
}