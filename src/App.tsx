import React from 'react'
import { observer } from 'mobx-react-lite'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { LoadingIndicator } from '@inno/ui-kit'
import { initOptions, kc } from './keycloak'
import { RoutesApp } from './routes'
import GlobalStyle from './globalStyles'

import '@inno/ui-kit/styles-kit/fonts.scss'
import '@inno/ui-kit/styles-kit/global.scss'

export const App: React.FC = observer(() => (
  <ReactKeycloakProvider
    authClient={kc}
    initOptions={initOptions}
    isLoadingCheck={(kc) => !kc.authenticated}
    LoadingComponent={<LoadingIndicator isVisible position='center' />}
  >
    <GlobalStyle />
    <RoutesApp />
  </ReactKeycloakProvider>
))
