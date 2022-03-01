import React, { FC } from 'react'
import styled from 'styled-components'
import { Header } from '../Header'

const Root = styled.div`
  min-height: 100%;
  background-color: #e5e5e5;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  min-height: calc(100vh - 48px);
  margin: 0 auto;
  padding-top: 44px;
  padding-bottom: 80px;
`

export const MainLayout: FC = ({ children }) => (
  <Root>
    <Header />
    <Content>{children}</Content>
  </Root>
)
