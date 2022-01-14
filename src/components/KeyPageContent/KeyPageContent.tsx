import React, { FC, useEffect } from 'react'
import { Button, Table, Skeleton } from '@inno/ui-kit'
import { observer } from 'mobx-react-lite'
import { keyStore } from '../../store'
import { ENameCookie, getCookie } from '../../utils'
import { AttachOutline, BillOutline } from '@inno/icons-kit'
import styled from 'styled-components'

const StyledTable = styled(Table)`
  button {
    border: 0;
  }
`

export const KeyPageContent: FC = observer(() => {
  const { getKeyList, columsKey, dataTableKey, loading } = keyStore

  useEffect(() => {
    if (!!getCookie(ENameCookie.TOKEN)) {
      getKeyList(getCookie(ENameCookie.TOKEN))
    }
  }, [])

  return (
    <>
      <h1>Список Key</h1>
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
        columns={columsKey}
        data={dataTableKey}
        isLoading={loading}
        tableRowSkeletonConfig={{
          repeat: 1,
          skeleton: <Skeleton rows={1} />,
        }}
      />
    </>
  )
})
