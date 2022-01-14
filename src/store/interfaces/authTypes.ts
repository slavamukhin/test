export enum KeycloakConfig {
  GRANT_TYPE = 'password',
  CLIENT_ID = 'tashkent',
  CLIENT_SECRET = '3235a554-6d5e-4f87-8c8a-6df0a54fc4c0',
  GRANT_TYPE_REFRESH = 'refresh_token'
}

export const keycloakHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

export type AuthData = {
  login: string
  password: string
}

export interface IAuthStore {
  token: string
  loading: boolean
  authError: Error
  getToken: (data: AuthData) => void
  refreshToken: (refrefh_token: string) => void
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