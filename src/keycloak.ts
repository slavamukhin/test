import Keycloak from 'keycloak-js'

const SEPARATOR = '-'
const hostname = window.location.hostname
const arrayHostName: Array<string> = hostname.split(SEPARATOR)
arrayHostName.shift()
const partNameHost = arrayHostName.join(SEPARATOR)

console.log('partNameHost', partNameHost)

const keycloak = Keycloak({
  url: `https://keycloak-${partNameHost}/auth`,
  realm: 'Uzcard',
  clientId: 'tashkent',
})

export const initOptions = {
  onLoad: 'login-required',
  silentCheckSsoRedirectUri: window.location.origin,
  pkceMethod: 'S256',
}

export const kc = keycloak
