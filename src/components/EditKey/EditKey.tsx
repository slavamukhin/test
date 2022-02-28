import { Modal } from '@inno/ui-kit'
import React, { FC, useEffect } from 'react'
import { apiStore, keyStore } from '../../store'
import { observer } from 'mobx-react-lite'
import { KeyForm } from '../forms/KeyForm'

export interface EditKeyProps {
  toggleModal: () => void
  resetForm: () => void
  open: boolean
  keyId: string
}

export const EditKey: FC<EditKeyProps> = observer(
  ({ toggleModal, resetForm, open, keyId }) => {
    const { getKey, keyValues } = keyStore

    useEffect(() => {
      if (keyId) {
        getKey(keyId)
      }
    }, [keyId])

    return (
      <div>
        <Modal
          handleClose={toggleModal}
          size='lg'
          title='Редактирование ключа'
          isOpen={open}
        >
          <KeyForm
            edit
            resetForm={resetForm}
            formValues={keyValues}
            keyId={keyId}
          />
        </Modal>
      </div>
    )
  }
)
