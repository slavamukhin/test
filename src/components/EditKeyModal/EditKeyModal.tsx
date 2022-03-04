import { Modal } from '@inno/ui-kit'
import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { keyStore } from '../../store'
import { KeyForm } from '../forms/KeyForm'
import { KeyObjectDto } from '../../interfaces'

export const EditKeyModal = observer(
  NiceModal.create(({ keyId }: Pick<KeyObjectDto, 'keyId'>) => {
    const { getKey, key } = keyStore
    const modal = useModal()

    useEffect(() => {
      getKey(keyId)
    }, [keyId])

    const handleClose = useCallback(() => {
      modal.hide()
      modal.remove()
    }, [modal])

    return (
      <Modal
        handleClose={handleClose}
        size='lg'
        title='Редактирование ключа'
        isOpen={modal.visible}
      >
        <KeyForm edit resetForm={handleClose} formValues={key} keyId={keyId} />
      </Modal>
    )
  })
)
