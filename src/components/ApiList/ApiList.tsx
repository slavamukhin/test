import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { EmptyBlock, Preloader, Status, Table } from '@inno/ui-kit'
import {
  DocsOutline,
  EyeOutline,
  PowerOutline,
  RedactOutline,
} from '@inno/icons-kit'
import { ColumnsType } from '@inno/ui-kit/lib/Table/types'
import { Box } from '../../layout/Box'
import { ApiObject } from '../../interfaces'
import { apiListStore } from '../../store'
import { ERoutesPath } from '../../routes'
import { showApiEditModal, showConfirmTurnOffApiModal } from '../../modals'

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
  {
    dataIndex: 'internal',
    title: 'Статус',
    render: (_, record) => (
      <Status isDot type={record.internal ? 'off' : 'active'} />
    ),
  },
]

export const ApiList = observer(() => {
  const { apiList, loading, getApiList } = apiListStore
  const navigate = useNavigate()

  useEffect(() => {
    getApiList()
  }, [])

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
          text='Ещё не создано ни одно API'
          icon={<DocsOutline />}
          action={{
            text: 'Создать API',
            onClick: () => navigate(ERoutesPath.API_CREATE),
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
        rowKey='apiId'
        actions={[
          {
            icon: <EyeOutline />,
            onClick: ({ apiId }) =>
              navigate(`${ERoutesPath.API_LIST_PAGE}/${apiId}`),
          },
          {
            icon: <RedactOutline />,
            onClick: ({ apiId }) => showApiEditModal(apiId),
          },
          {
            icon: <PowerOutline />,
            onClick: ({ apiId }) => showConfirmTurnOffApiModal(apiId),
          },
        ]}
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
