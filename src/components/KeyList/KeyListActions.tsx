import React, { FC } from 'react'
import { OverflowMenu } from '@inno/ui-kit'
import { showConfirmTurnOffKeyModal, showKeyEditModal } from '../../modals'

interface KeyListActionsProps {
  keyId: string
}

export const KeyListActions: FC<KeyListActionsProps> = ({ keyId }) => {
  return (
    <OverflowMenu
      items={[
        {
          id: 'edit',
          label: 'Редактировать',
          onClick: () => showKeyEditModal(keyId),
        },
        {
          id: 'off',
          label: 'Выключить',
          onClick: () => showConfirmTurnOffKeyModal(keyId),
        },
      ]}
      dropdownConfig={{
        menuAlign: 'right',
      }}
    />
  )
}
