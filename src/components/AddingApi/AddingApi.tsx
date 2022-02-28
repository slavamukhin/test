import { Button, Modal, Table } from '@inno/ui-kit'
import React, { FC, useState } from 'react'
import { availableApi, apiListStore } from '../../store'
import { observer } from 'mobx-react-lite'
import { FormLine } from '../forms/StyledComponent'
import { PlusOutline, RedactOutline, TrashOutline } from '@inno/icons-kit'
import { AddingApiForm } from '../forms/AddingApiForm'
import styled from 'styled-components'

export interface EditApiProps {
  toggleModal: () => void
  resetForm: () => void
  open: boolean
  apiId: string
}

const StyledTable = styled(Table)`
  button {
    border: 0;
  }
`

const AddingApiWrapper = styled.div`
  width: 547px;
`

export const AddingApi: FC = observer(() => {
  const { columsKey, dataTableKey, deleteApi, setEditableApiName } =
    availableApi
  const { chooseApi } = apiListStore
  const [open, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(!open)
  }

  const addedButtonClick = () => {
    setEditableApiName('')
    toggleModal()
  }

  return (
    <AddingApiWrapper>
      <Modal
        handleClose={toggleModal}
        size='md'
        title='Добавление доступа к API'
        isOpen={open}
      >
        <AddingApiForm toggleModal={toggleModal} />
      </Modal>
      <StyledTable
        actions={[
          {
            icon: <RedactOutline />,
            onClick: (e) => {
              chooseApi(e.name)
              setEditableApiName(e.name)
              toggleModal()
            },
          },
          {
            icon: <TrashOutline />,
            onClick: (e) => {
              console.log('e', e)
              setEditableApiName('')
              deleteApi(e.name)
            },
          },
        ]}
        columns={columsKey}
        data={dataTableKey}
      />
      <FormLine>
        <Button
          icon={<PlusOutline />}
          iconAlignment='left'
          buttonType='button'
          onClick={addedButtonClick}
          text='Добавить API'
          type='secondary'
          isBlock
        />
      </FormLine>
    </AddingApiWrapper>
  )
})
