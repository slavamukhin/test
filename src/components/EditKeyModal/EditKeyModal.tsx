import { Modal, Preloader } from '@inno/ui-kit'
import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { keyStore } from '../../store'
import { KeyForm } from '../forms/KeyForm'
import { KeyObjectDto } from '../../interfaces'
import styled from 'styled-components'
import { Box } from '../../layout/Box'

export const EditKeyModal = 
  NiceModal.create(observer(({ keyId }: Pick<KeyObjectDto, 'keyId'>) => {
    const { getKey, key, data } = keyStore
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
        {data ? 
        <KeyForm edit resetForm={handleClose} formValues={key} keyId={keyId} />
        : <StyledBox><Preloader /></StyledBox>
        }
      </Modal>
    )
  })
)

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`