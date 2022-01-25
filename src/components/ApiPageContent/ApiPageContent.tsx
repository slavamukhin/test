import React, { FC, useEffect } from 'react'
import { apiStore } from '../../store'
import { observer } from 'mobx-react-lite'
import { Button, Skeleton, Table } from '@inno/ui-kit'
import styled from 'styled-components'
import { AttachOutline, BillOutline } from '@inno/icons-kit'
import { ENameCookie, getCookie } from '../../utils'
import { Link } from 'react-router-dom'
import { ERoutesPath } from '../../routes'

const StyledTable = styled(Table)`
  button {
    border: 0;
  }
`

export const ApiPageContent: FC = observer(() => {
  const { getApiList, columsApi, dataTableApi, loading } = apiStore

  useEffect(() => {
    if (!!getCookie(ENameCookie.TOKEN)) {
      getApiList()
    }
  }, [])

  return (
    <>
      <h1>Список API</h1>
      <Link to={ERoutesPath.API_CREATE}>
        <Button> Создать Api</Button>
      </Link>
      <StyledTable
        actions={[
          {
            icon: <AttachOutline />,
            onClick: () => {},
          },
          {
            icon: <BillOutline />,
            onClick: () => {},
          },
        ]}
        columns={columsApi}
        data={dataTableApi}
        isLoading={loading}
        tableRowSkeletonConfig={{
          repeat: 1,
          skeleton: <Skeleton rows={1} />,
        }}
      />
    </>
  )
})
