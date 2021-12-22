import React, { FC } from 'react'
import styled from 'styled-components'
import { MenuItems } from './MenuItems'

const MenuWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Menu: FC = () => {
  return (
    <MenuWrapper>
      <MenuItems />
    </MenuWrapper>
  )
}
