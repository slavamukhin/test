export enum KeycloakConfig {
  GRANT_TYPE = 'password',
  CLIENT_ID = 'tashkent',
  CLIENT_SECRET = '3d8f539e-fcfa-4db1-859d-a3f20d144646',
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