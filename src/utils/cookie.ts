import Cookies, { CookieAttributes } from 'js-cookie'
export enum ENameCookie {
  AUTH = 'auth',
  TOKEN = 'token',
  REFRESH_TOKEN = 'refresh_token',
  EDIT = 'edit',
  NAME = 'name',
}
export const getCookie = (name: ENameCookie): string | undefined =>
  Cookies.get(`${name}`)

export const removeCookie = (name: ENameCookie): void =>
  Cookies.remove(`${name}`)

export const setCookie = (
  name: string,
  value: string,
  config?: CookieAttributes
) => Cookies.set(name, value, config)
