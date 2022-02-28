import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { EmptyBlock, Preloader, Table } from '@inno/ui-kit';
import { AttachOutline, DocsOutline, PowerOutline } from '@inno/icons-kit';
import { ColumnsType } from '@inno/ui-kit/lib/Table/types';
import { useKeycloak } from '@react-keycloak/web';
import { Box } from '../../layout/Box';
import { ApiObject } from '../../interfaces';
import { apiListStore } from '../../store';
import { ERoutesPath } from '../../routes';
import { EditApi } from '../EditApi';

const columns: ColumnsType<ApiObject> = [
  {
    dataIndex: 'name',
    title: 'Название',
  },
  {
    dataIndex: 'apiId',
    title: 'Идентификатор',
  },
  {
    dataIndex: 'listenPath',
    title: 'Listen Path',
  },
  {
    dataIndex: 'targetUrl',
    title: 'Target URL',
  },
]

export const ApiList = observer(() => {
  const { apiList, loading, getApiList } = apiListStore
  const { initialized } = useKeycloak()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [apiId, setApiId] = useState('')

  useEffect(() => {
    if (initialized) {
      getApiList()
    }
  }, [initialized])

  const toggleModal = () => setOpen(!open)

  const resetForm = () => toggleModal()

  if (loading) {
    return (
      <StyledBox>
        <Preloader />
      </StyledBox>
    )
  }

  if (apiList.length < 1) {
    return (
      <StyledBox>
        <EmptyBlock
          text="Ещё не создано ни одно API"
          icon={<DocsOutline />}
          action={{
            text: 'Создать API',
            onClick: () => navigate(ERoutesPath.API_CREATE)
          }}
        />
      </StyledBox>
    )
  }

  return (
    <Box>
      <Table<ApiObject>
        columns={columns}
        data={apiList}
        rowKey="apiId"
        actions={[
          {
            icon: <AttachOutline />,
            onClick: (e) => {
              setApiId(e.apiId)
              toggleModal()
            },
          },
          {
            icon: <PowerOutline />,
            onClick: () => {},
          },
        ]}
      />
      <EditApi
        open={open}
        resetForm={resetForm}
        toggleModal={toggleModal}
        apiId={apiId}
      />
    </Box>
  )
})

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
