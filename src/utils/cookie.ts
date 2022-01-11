import Cookies from 'js-cookie'
export enum ENameCookie {
  AUTH = 'auth',
  TOKEN = 'token'
}
export const getCookie = (name: ENameCookie): string | undefined => Cookies.get(`${name}`)
