import React, { FC } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components/NavBar'

const AsideWrapper = styled.aside`
  border-right: 1px solid #d5d8de;
  flex-basis: 20%;
`

export const Aside: FC = () => {
  return (
    <AsideWrapper>
      <NavBar />
    </AsideWrapper>
  )
}
