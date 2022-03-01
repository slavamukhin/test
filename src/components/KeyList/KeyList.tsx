import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { EmptyBlock, Preloader, Table } from '@inno/ui-kit'
import { DocsOutline, PowerOutline, RedactOutline } from '@inno/icons-kit'
import { ColumnsType } from '@inno/ui-kit/lib/Table/types'
import { useKeycloak } from '@react-keycloak/web'
import { Box } from '../../layout/Box'
import { KeyShortDescriptionObjectDto } from '../../interfaces'
import { keyListStore } from '../../store'
import { ERoutesPath } from '../../routes'
import { EditKey } from '../EditKey'

const columns: ColumnsType<KeyShortDescriptionObjectDto> = [
  {
    dataIndex: 'name',
    title: 'Название',
  },
  {
    dataIndex: 'keyId',
    title: 'Идентификатор',
  },
]

export const KeyList = observer(() => {
  const { keyList, loading, getKeyList } = keyListStore
  const { initialized } = useKeycloak()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [keyId, setKeyId] = useState('')

  useEffect(() => {
    if (initialized) {
      getKeyList()
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
        data={keyList}
        rowKey='keyId'
        actions={[
          {
            icon: <RedactOutline />,
            onClick: (e) => {
              setKeyId(e.keyId)
              toggleModal()
            },
          },
          {
            icon: <PowerOutline />,
            onClick: () => {},
          },
        ]}
      />
      <EditKey
        open={open}
        resetForm={resetForm}
        toggleModal={toggleModal}
        keyId={keyId}
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
