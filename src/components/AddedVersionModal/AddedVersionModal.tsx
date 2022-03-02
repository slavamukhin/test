import { Modal } from '@inno/ui-kit'
import React, { FC, useState } from 'react'
import { AddingVersionForm } from '../forms/AddingVersionForm'

export const AddedVersionModal: FC = () => {
  const [open, setOpen] = useState(true)

  const edit = false
  const title = edit ? 'Редактирование версии' : 'Добавление версии'

  const toggleModal = () => {
    setOpen(!open)
  }

  return (
    <Modal handleClose={toggleModal} size='md' title={title} isOpen={open}>
      <AddingVersionForm edit={edit} />
    </Modal>
  )
}
