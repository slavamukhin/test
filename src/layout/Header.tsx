import React, { FC } from 'react'
import { NavBar } from './NavBar'
import { UserPanel } from './UserPanel'
import Logo from './logo.svg'
import {
  HeaderWrapper,
  WrapperLogo,
  LogoTitle,
  UserWrapper,
} from './StyledComponent'
import { useKeycloak } from '@react-keycloak/web'

export const Header: FC = () => {
  const { initialized } = useKeycloak()
  return (
    <HeaderWrapper>
      <WrapperLogo>
        <Logo />
        <LogoTitle>API Gateway</LogoTitle>
      </WrapperLogo>

      {!!initialized && (
        <UserWrapper>
          <NavBar />
          <UserPanel />
        </UserWrapper>
      )}
    </HeaderWrapper>
  )
}
