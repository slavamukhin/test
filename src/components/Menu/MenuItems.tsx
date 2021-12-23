import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { menu } from './data'

const CustomLink = styled(NavLink)`
  display: block;
  padding: 10px 0 10px 40px;
  &:hover {
    background-color: #edf6ff;
  }
`

export const MenuItems: FC = () => {
  const menuItems: ReactElement[] = menu.map(
    ({ id, title, to, activeClassName }): ReactElement => (
      <li key={id}>
        <CustomLink
          to={to}
          className={(navData) =>
            navData.isActive ? `${activeClassName}` : ''
          }
        >
          {title}
        </CustomLink>
      </li>
    )
  )
  return <>{menuItems}</>
}
