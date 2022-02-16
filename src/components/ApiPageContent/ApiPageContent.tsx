import React, { FC, useEffect, useState } from 'react'
import { apiListStore } from '../../store'
import { observer } from 'mobx-react-lite'
import { Button, Skeleton, Table } from '@inno/ui-kit'
import styled from 'styled-components'
import { AttachOutline, BillOutline } from '@inno/icons-kit'
import { Link } from 'react-router-dom'
import { ERoutesPath } from '../../routes'
import { EditApi } from '../EditApi'
import { useKeycloak } from '@react-keycloak/web'

const StyledTable = styled(Table)`
  button {
    border: 0;
  }
`

export const ApiPageContent: FC = observer(() => {
  const { getApiList, columsApi, dataTableApi, loading } = apiListStore
  const [open, setOpen] = useState(false)
  const [apiId, setApiId] = useState('')
  const { initialized } = useKeycloak()

  useEffect(() => {
    if (initialized) {
      getApiList()
    }
  }, [initialized])

  const toggleModal = () => {
    setOpen(!open)
  }

  const resetForm = () => {
    toggleModal()
  }

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
            onClick: (e) => {
              setApiId(e.key)
              toggleModal()
            },
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
      <EditApi
        open={open}
        resetForm={resetForm}
        toggleModal={toggleModal}
        apiId={apiId}
      />
    </>
  )
})
