import React, { FC, useState, ReactElement, useCallback } from 'react'
import { Button, Dialog } from '@inno/ui-kit'
import { PowerOutline } from '@inno/icons-kit'
import styled from 'styled-components'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

const StyledPowerOutline = styled(PowerOutline)`
  color: #d92020;
`

export const ConfirmTurnOffApiModal = NiceModal.create(
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
            Выключить
          </Button>
        }
        closeButton={
          <Button onClick={handleClose} type='secondary'>
            Отменить
          </Button>
        }
        handleClose={handleClose}
        icon={<StyledPowerOutline />}
        size='md'
        title='Выключить?'
        isOpen={modal.visible}
      >
        <>{apiId}</>
      </Dialog>
    )
  }
)
