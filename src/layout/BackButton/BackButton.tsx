import React, { FC } from 'react'
import { ArrowLongLeftOutline } from '@inno/icons-kit'
import { Link } from '@inno/ui-kit'
import styled from 'styled-components'

const DEFAULT_LABEL = 'Назад'

interface BackButtonProps {
  className?: string
  label?: string
  onClick?(): void
}

export const BackButton: FC<BackButtonProps> = ({
  className,
  label = DEFAULT_LABEL,
  onClick,
}) => (
  <StyledLink
    className={className}
    text={label}
    href='#'
    onClick={onClick}
    color='primary'
    size='sm'
    Icon={<ArrowLongLeftOutline />}
    iconAlignment='left'
  />
)

// Наследует стиль от body
const StyledLink = styled(Link)`
  div,
  span {
    color: currentColor;
  }
`
