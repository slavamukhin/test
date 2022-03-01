import React from 'react'
import { RoutesApp } from './routes'
import GlobalStyle from './globalStyles'
import { observer } from 'mobx-react-lite'
import '@inno/ui-kit/styles-kit/fonts.scss'
import '@inno/ui-kit/styles-kit/global.scss'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { initOptions, kc } from './keycloak'
import { LoadingIndicator } from '@inno/ui-kit'

export const App: React.FC = observer(() => {
  return (
    <ReactKeycloakProvider
      authClient={kc}
      initOptions={initOptions}
      isLoadingCheck={(kc) => !kc.authenticated}
      LoadingComponent={<LoadingIndicator isVisible position='center' />}
    >
      <GlobalStyle />
      <RoutesApp />
    </ReactKeycloakProvider>
  )
})
