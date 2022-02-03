import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENameCookie } from '../../utils'
import { removeCookie } from '../../utils/cookie'
import { ERoutesPath } from '../../routes'
import { ExitButton } from './StyledComponent'

export const Logout: FC = () => {
  const navigane = useNavigate()

  const logout = () => {
    removeCookie(ENameCookie.REFRESH_TOKEN)
    navigane(ERoutesPath.AUTH_PAGE)
  }

  return <ExitButton onClick={logout}>Выход</ExitButton>
}
