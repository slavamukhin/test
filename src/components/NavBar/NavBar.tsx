import React, { FC } from 'react'
import styled from 'styled-components'
import { Menu } from '../Menu'

const NavBarWrapper = styled.nav`
  padding: 20px 0 20px;
`

export const NavBar: FC = () => {
  return (
    <NavBarWrapper>
      <Menu />
    </NavBarWrapper>
  )
}
