import React, { FC } from 'react'
import { SearchOutline, PlusOutline } from '@inno/icons-kit';
import { InputSearch, Button } from '@inno/ui-kit';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ERoutesPath } from '../../routes';
import { availableApi } from '../../store';

const Root = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`;

const StyledInputSearch = styled(InputSearch)`
    width: 400px;
    background-color: white;
    border-radius: 4px;
`

export const KeyListHeader: FC = () => {
  const { clearAvailableApiList } = availableApi

  return (
    <Root>
      <StyledInputSearch
        primaryIcon={<SearchOutline />}
        placeholder="Название или идентификатор"
        withClear
      />
      <Link to={ERoutesPath.KEY_CREATE} onClick={clearAvailableApiList}>
        <Button icon={<PlusOutline/>}>Новый ключ</Button>
      </Link>
    </Root>
  )
}
