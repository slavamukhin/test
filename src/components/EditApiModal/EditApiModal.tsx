import { Modal } from '@inno/ui-kit'
import React, { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { ApiForm } from '../forms/ApiForm'
import { apiStore } from '../../store'
import { ApiObject } from '../../interfaces'

export const EditApiModal = observer(
  NiceModal.create(({ apiId }: Pick<ApiObject, 'apiId'>) => {
    const { getApi, api } = apiStore
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
        <ApiForm edit resetForm={handleClose} formValues={api} apiId={apiId} />
      </Modal>
    )
  })
)
