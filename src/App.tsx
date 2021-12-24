import React from 'react'
import { RoutesApp } from './routes'

import GlobalStyle from './globalStyles'

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
    </>
  )
}
