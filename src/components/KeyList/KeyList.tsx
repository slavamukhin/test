import React, { useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { EmptyBlock, Preloader, Table } from '@inno/ui-kit'
import { DocsOutline } from '@inno/icons-kit'
import { ColumnsType } from '@inno/ui-kit/lib/Table/types'
import { toJS } from 'mobx'
import { Box } from '../../layout/Box'
import { KeyShortDescriptionObjectDto } from '../../interfaces'
import { keyListStore } from '../../store'
import { ERoutesPath } from '../../routes'
import { KeyListActions } from './KeyListActions'

const columns: ColumnsType<KeyShortDescriptionObjectDto> = [
  {
    dataIndex: 'name',
    title: 'Название',
  },
  {
    dataIndex: 'keyId',
    title: 'Идентификатор',
  },
  // {
  //   dataIndex: 'active',
  //   title: 'Статус',
  //   render: (_, { active }) => (
  //     <Status isDot type={active ? 'active' : 'off'} />
  //   ),
  // },
  {
    dataIndex: 'actions',
    width: 40,
    align: 'right',
    render: (_, { keyId }) => <KeyListActions keyId={keyId} />,
    onCell: () => ({
      onClick: (event) => event.stopPropagation(),
    }),
  },
]

export const KeyList = observer(() => {
  const { keyList, loading, getKeyList } = keyListStore
  const navigate = useNavigate()

  useEffect(() => {
    getKeyList()
  }, [])

  if (loading) {
    return (
      <StyledBox>
        <Preloader />
      </StyledBox>
    )
  }

  if (keyList.length < 1) {
    return (
      <StyledBox>
        <EmptyBlock
          text='Ещё не создано ни одного ключа'
          icon={<DocsOutline />}
          action={{
            text: 'Создать ключ',
            onClick: () => navigate(ERoutesPath.KEY_CREATE),
          }}
        />
      </StyledBox>
    )
  }

  return (
    <Box>
      <Table<KeyShortDescriptionObjectDto>
        columns={columns}
        data={toJS(keyList)}
        rowKey='keyId'
        onRow={({ keyId }) => ({
          onClick: () => navigate(`${ERoutesPath.KEY_LIST_PAGE}/${keyId}`),
        })}
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
