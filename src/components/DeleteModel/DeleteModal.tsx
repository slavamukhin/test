import { Button, Dialog } from '@inno/ui-kit'
import React, { FC, useState, ReactElement } from 'react'
import { TrashOutline } from '@inno/icons-kit'
import styled from 'styled-components'

export interface DeleteModalProps {
  clickDeleteButton?: () => void
  clickSaveButton?: () => void
  content: ReactElement
  title: string
}

const StyledTrashOutline = styled(TrashOutline)`
  color: #d92020;
`

export const DeleteModal: FC<DeleteModalProps> = ({
  clickDeleteButton,
  clickSaveButton,
  content,
  title,
}) => {
  const [toggle, setToggle] = useState(true)

  const clickRunToggle = () => setToggle(!toggle)

  return (
    <Dialog
      closeButton={
        <Button onClick={clickSaveButton} text='Отмена' type='secondary' />
      }
      handleClose={clickRunToggle}
      icon={<StyledTrashOutline />}
      size='md'
      submitButton={
        <Button onClick={clickDeleteButton} text='Удалить' type='primary' />
      }
      title={title}
      isOpen={toggle}
    >
      {content}
    </Dialog>
  )
}
