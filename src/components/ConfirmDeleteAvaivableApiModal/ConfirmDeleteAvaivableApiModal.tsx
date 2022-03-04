import React, { FC, useState, ReactElement, useCallback } from 'react'
import { Button, Dialog } from '@inno/ui-kit'
import { TrashOutline } from '@inno/icons-kit'
import styled from 'styled-components'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

const StyledTrashOutline = styled(TrashOutline)`
  color: #d92020;
`

export const ConfirmDeleteAvaivableApiModal = NiceModal.create(
  ({ apiId }: { apiId: string }) => {
    const modal = useModal()

    const handleClose = useCallback(() => {
      modal.hide()
      modal.remove()
    }, [modal])

    return (
      <Dialog
        submitButton={
          <Button onClick={() => {}} type='primary'>
            Удалить
          </Button>
        }
        closeButton={
          <Button onClick={handleClose} type='secondary'>
            Отменить
          </Button>
        }
        handleClose={handleClose}
        icon={<StyledTrashOutline />}
        size='md'
        title='Удалить доступ к API?'
        isOpen={modal.visible}
      >
        <>{apiId}</>
      </Dialog>
    )
  }
)
