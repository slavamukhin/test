import React, { FC } from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import { UserPanel } from './UserPanel'
import { ENameCookie, getCookie } from '../utils'
import Logo from './logo.svg'
import {
  HeaderWrapper,
  WrapperLogo,
  LogoTitle,
  UserWrapper,
} from './StyledComponent'

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <WrapperLogo>
        <Logo />
        <LogoTitle>API Gateway</LogoTitle>
      </WrapperLogo>

      {!!getCookie(ENameCookie.REFRESH_TOKEN) && (
        <UserWrapper>
          <NavBar />
          <UserPanel />
        </UserWrapper>
      )}
    </HeaderWrapper>
  )
}
