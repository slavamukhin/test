import React, { FC } from 'react'
import styled from 'styled-components'
import { IContent, IContentWrapper } from './interfaces'

const ContentWrapper = styled.div<IContentWrapper>`
  flex-basis: ${({ auth }) => (auth ? '100%' : '80%')};
  padding: 20px;
`

export const Content: FC<IContent> = ({ children, auth }) => {
  return <ContentWrapper auth={auth}>{children}</ContentWrapper>
}
