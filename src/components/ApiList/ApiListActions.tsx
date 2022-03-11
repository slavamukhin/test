import React, { FC } from 'react'
import { OverflowMenu } from '@inno/ui-kit'
import { showApiEditModal, showConfirmTurnOffApiModal } from '../../modals'

interface ApiListActionsProps {
  apiId: string
}

export const ApiListActions: FC<ApiListActionsProps> = ({ apiId }) => {
  return (
    <OverflowMenu
      items={[
        {
          id: 'edit',
          label: 'Редактировать',
          onClick: () => showApiEditModal(apiId),
        },
        {
          id: 'off',
          label: 'Выключить',
          onClick: () => showConfirmTurnOffApiModal(apiId),
        },
      ]}
      dropdownConfig={{
        menuAlign: 'right',
      }}
    />
  )
}
