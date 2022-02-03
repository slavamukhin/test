import React, { FC } from 'react'
import { Header } from './Header'
import { Content } from './Content'
import { IContent } from './interfaces'
import { Wrapper } from './StyledComponent'

export const Layout: FC<IContent> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}
