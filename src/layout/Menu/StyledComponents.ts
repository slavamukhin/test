import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CustomLink = styled(NavLink)`
  display: inline-block;
  padding: 12px 18px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  font-size: 14px;
`

export const Item = styled.li`
  color: #fff;
`

export const MenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`
