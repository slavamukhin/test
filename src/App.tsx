import React, { FC } from 'react'
import { RoutesApp } from './routes'

import GlobalStyle from './globalStyles'

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
    </>
  )
}
