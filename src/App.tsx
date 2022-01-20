import React, { useEffect, useState } from 'react'
import { RoutesApp } from './routes'
import GlobalStyle from './globalStyles'
import { AuthPage } from './pages'
import { observer } from 'mobx-react-lite'
import { authStore } from './store'
import { getCookie, ENameCookie } from './utils'
import '@inno/ui-kit/styles-kit/fonts.scss'
import '@inno/ui-kit/styles-kit/global.scss'

export const App: React.FC = observer(() => {
  const { token } = authStore
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    setFlag(!getCookie(ENameCookie.REFRESH_TOKEN))
  }, [token])
  if (flag)
    return (
      <>
        <GlobalStyle />
        <AuthPage />
      </>
    )
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
    </>
  )
})
