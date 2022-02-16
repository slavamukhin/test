import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENameCookie } from '../../utils'
import { removeCookie } from '../../utils/cookie'
import { ERoutesPath } from '../../routes'
import { ExitButton } from './StyledComponent'
import { useKeycloak } from '@react-keycloak/web'

export const Logout: FC = () => {
  const navigane = useNavigate()
  const { keycloak } = useKeycloak()

  const logout = () => {
    keycloak.logout()
  }

  return <ExitButton onClick={logout}>Выход</ExitButton>
}
