
import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading } from '@inno/ui-kit'
import { observer } from 'mobx-react-lite'
import { keyListStore } from '../../store'

const StyledHeading = styled(Heading)`
  span {
    color: #B1B5BB;
  }
`

export const KeyListHeadline = observer(() => {
  const { totalCount } = keyListStore

  return (
    <StyledHeading tag="h3">
      Список ключей <span>{totalCount}</span>
    </StyledHeading>
  )
})
