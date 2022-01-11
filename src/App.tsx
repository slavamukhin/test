import React, { useEffect, useState } from 'react'
import { RoutesApp } from './routes'
import GlobalStyle from './globalStyles'
import { AuthPage } from './pages'
import { observer } from 'mobx-react-lite'
import { authStore } from './store'
import { getCookie, ENameCookie } from './utils'

export const App: React.FC = observer(() => {
  const { token } = authStore
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    setFlag(!getCookie(ENameCookie.AUTH))
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
