import React, { FC, ReactNode } from 'react'
import { Heading } from '@inno/ui-kit'
import { Box } from '../Box'
import { Header, Root } from './styled'

interface CardProps {
  title: string
  actions?: ReactNode
}

export const Card: FC<CardProps> = ({ children, title, actions }) => (
  <Root>
    <Header>
      <Heading.H6>{title}</Heading.H6>
      {actions}
    </Header>
    <Box>{children}</Box>
  </Root>
)
