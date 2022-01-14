import Cookies from 'js-cookie'
export enum ENameCookie {
  AUTH = 'auth',
  TOKEN = 'token',
  REFRESH_TOKEN = 'refresh_token'
}
export const getCookie = (name: ENameCookie): string | undefined => Cookies.get(`${name}`)
