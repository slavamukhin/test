import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthPageContent } from '../components'
import { Layout } from '../layout/indext'
import { observer } from 'mobx-react-lite'
import { authStore } from '../store'
import { getCookie, ENameCookie } from '../utils'
import { ERoutesPath } from '../routes'

export const AuthPage: FC = observer(() => {
  const navigane = useNavigate()
  const { token } = authStore

  useEffect(() => {
    if (getCookie(ENameCookie.REFRESH_TOKEN)) {
      navigane(ERoutesPath.API_PAGE)
    }
  }, [token])

  return (
    <Layout>
      <AuthPageContent />
    </Layout>
  )
})
