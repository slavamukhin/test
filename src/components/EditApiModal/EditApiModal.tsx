import { Modal, Preloader } from '@inno/ui-kit'
import React, { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { ApiForm } from '../forms/ApiForm'
import { apiStore } from '../../store'
import { ApiObject } from '../../interfaces'
import styled from 'styled-components'
import { Box } from '../../layout/Box'

export const EditApiModal =
  NiceModal.create(observer(({ apiId }: Pick<ApiObject, 'apiId'>) => {
    const { getApi, api, data } = apiStore
    const modal = useModal()

    useEffect(() => {
      getApi(apiId)
    }, [apiId])

    const handleClose = useCallback(() => {
      modal.hide()
      modal.remove()
    }, [modal])

    return (
      <Modal
        handleClose={handleClose}
        size='lg'
        title='Редактирование Api'
        isOpen={modal.visible}
      >
        {data ?
        <ApiForm edit resetForm={handleClose} formValues={api} apiId={apiId} />
        : <StyledBox><Preloader /></StyledBox>}
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