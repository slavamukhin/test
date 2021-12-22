import React, { FC } from 'react'
import styled from 'styled-components'
import { Aside } from './Aside'
import { Header } from './Header'
import { Content } from './Content'
import { IContent } from './interfaces'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: calc(100% - 60px);
`

export const Loyout: FC<IContent> = ({ children, auth }) => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        {!auth && <Aside></Aside>}
        <Content auth={auth}>{children}</Content>
      </Wrapper>
    </>
  )
}
