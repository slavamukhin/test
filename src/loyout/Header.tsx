import React, { FC } from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'

const HeaderWrapper = styled.header`
  height: 60px;
  background: #003c96;
  display: flex;
  align-items: center;
`

const CustomLogo = styled(Logo)`
  padding-left: 40px;
`

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <CustomLogo />
    </HeaderWrapper>
  )
}
