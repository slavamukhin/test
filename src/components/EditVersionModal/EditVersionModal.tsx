import React, { useCallback } from 'react'
import { Modal } from '@inno/ui-kit'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { VersionForm } from '../forms/VersionForm'
import { VersionObject } from '../../interfaces'

export const EditVersionModal = NiceModal.create(
  ({ version }: { version: VersionObject }) => {
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
        <VersionForm
          edit
          initialValues={{
            ...version,
            newSpecification: false,
            apiSpecification: JSON.stringify(version.apiSpecification),
          }}
        />
      </Modal>
    )
  }
)
