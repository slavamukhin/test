import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ERoutesPath } from '../routes'
import { useKeycloak } from '@react-keycloak/web'
import { LoadingIndicator } from '@inno/ui-kit'

export const AuthPage: FC = observer(() => {
  const navigane = useNavigate()
  const { initialized } = useKeycloak()

  useEffect(() => {
    if (initialized) {
      navigane(ERoutesPath.API_PAGE)
    }
  }, [initialized])

  return <LoadingIndicator isVisible position='top' />
})
