import React, { FC, ReactElement } from 'react'
import { CustomLink, Item } from './StyledComponents'
import { menu } from './data'

export const MenuItems: FC = () => {
  const menuItems: ReactElement[] = menu.map(
    ({ id, title, to, activeClassName }): ReactElement => (
      <Item key={id}>
        <CustomLink
          to={to}
          className={(navData) =>
            navData.isActive ? `${activeClassName}` : ''
          }
        >
          {title}
        </CustomLink>
      </Item>
    )
  )
  return <>{menuItems}</>
}
