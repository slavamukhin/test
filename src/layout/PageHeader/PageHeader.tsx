import React, { FC, ReactNode } from 'react'
import { Container, Heading, Skeleton } from '@inno/ui-kit'
import { Content, Headline, Root, StyledBackButton } from './styled'

interface PageHeaderProps {
  title: string
  status?: ReactNode
  actions?: ReactNode
  backLabel?: string
  onBack?: () => void
}

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  status,
  actions,
  backLabel,
  onBack,
}) => (
  <Root>
    {onBack && <StyledBackButton label={backLabel} onClick={onBack} />}
    <Content>
      <Headline>
        <Heading.H3>{title}</Heading.H3>
        {status}
      </Headline>
      {actions}
    </Content>
  </Root>
)
