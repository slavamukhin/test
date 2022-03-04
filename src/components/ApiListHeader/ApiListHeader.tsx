import React, { FC } from 'react'
import { SearchOutline, PlusOutline } from '@inno/icons-kit'
import { InputSearch, Button } from '@inno/ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ERoutesPath } from '../../routes'

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`

const StyledInputSearch = styled(InputSearch)`
  width: 400px;
  background-color: white;
  border-radius: 4px;
`

export const ApiListHeader: FC = () => {
  return (
    <Root>
      <StyledInputSearch
        primaryIcon={<SearchOutline />}
        placeholder='Название или идентификатор'
        withClear
      />
      <Link to={ERoutesPath.API_CREATE}>
        <Button icon={<PlusOutline />}>Новое API</Button>
      </Link>
    </Root>
  )
}
