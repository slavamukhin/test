import React, { FC } from 'react'
import { IContent } from './interfaces'
import { ContentWrapper } from './StyledComponent'

export const Content: FC<IContent> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>
}
