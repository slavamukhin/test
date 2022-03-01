import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading } from '@inno/ui-kit'
import { observer } from 'mobx-react-lite'
import { apiListStore } from '../../store'

const StyledHeading = styled(Heading)`
  margin-top: 80px;

  span {
    color: #b1b5bb;
  }
`

export const ApiListHeadline = observer(() => {
  const { totalCount } = apiListStore

  return (
    <StyledHeading tag='h3'>
      Список API <span>{totalCount}</span>
    </StyledHeading>
  )
})
