import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
  url: 'https://keycloak-uzcards.dbp.inno.tech/auth',
  realm: 'Uzcard',
  clientId: 'tashkent',
})

export const initOptions = {
  onLoad: 'login-required',
  silentCheckSsoRedirectUri: window.location.origin,
  pkceMethod: 'S256',
}

export const kc = keycloak
