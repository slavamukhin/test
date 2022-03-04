import React, { useCallback } from 'react'
import { Modal } from '@inno/ui-kit'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { AddingVersionForm } from '../forms/AddingVersionForm'

export const EditVersionModal = NiceModal.create(() => {
  const modal = useModal()

  const handleClose = useCallback(() => {
    modal.hide()
    modal.remove()
  }, [modal])

  return (
    <Modal
      title='Редактирование версии'
      size='md'
      isOpen={modal.visible}
      handleClose={handleClose}
    >
      <AddingVersionForm edit />
    </Modal>
  )
})
