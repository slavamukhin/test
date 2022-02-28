import { Modal } from '@inno/ui-kit'
import React, { FC, useEffect } from 'react'
import { ApiForm } from '../forms/ApiForm'
import { apiStore } from '../../store'
import { observer } from 'mobx-react-lite'

export interface EditApiProps {
  toggleModal: () => void
  resetForm: () => void
  open: boolean
  apiId: string
}

export const EditApi: FC<EditApiProps> = observer(
  ({ toggleModal, resetForm, open, apiId }) => {
    const { getApi, apiValues } = apiStore

    useEffect(() => {
      if (apiId) {
        getApi(apiId)
      }
    }, [apiId])

    return (
      <div>
        <Modal
          handleClose={toggleModal}
          size='lg'
          title='Редактирование Api'
          isOpen={open}
        >
          <ApiForm
            edit
            resetForm={resetForm}
            formValues={apiValues}
            apiId={apiId}
          />
        </Modal>
      </div>
    )
  }
)
