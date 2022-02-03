import React, { FC } from 'react'
import { Avatar } from '../Avatar'
import { Logout } from '../Logout'
import { UserPanelWrapper } from './StyledComponent'

export const UserPanel: FC = () => {
  return (
    <UserPanelWrapper>
      <Avatar />
      <Logout />
    </UserPanelWrapper>
  )
}
