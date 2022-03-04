import { Modal } from '@inno/ui-kit'
import React, { useCallback } from 'react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { AddingApiForm } from '../forms/AddingApiForm'

export const AddAvaivableApiModal = NiceModal.create(() => {
  const modal = useModal()

  const handleClose = useCallback(() => {
    modal.hide()
    modal.remove()
  }, [modal])

  return (
    <Modal
      handleClose={handleClose}
      size='lg'
      title='Добавление доступа к API'
      isOpen={modal.visible}
    >
      <AddingApiForm toggleModal={handleClose} />
    </Modal>
  )
})
