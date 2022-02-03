import React, { FC } from 'react'
import { MenuItems } from './MenuItems'
import { MenuWrapper } from './StyledComponents'

export const Menu: FC = () => {
  return (
    <MenuWrapper>
      <MenuItems />
    </MenuWrapper>
  )
}
