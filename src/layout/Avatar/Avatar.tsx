import React, { FC } from 'react'
import { ENameCookie, getCookie } from '../../utils'
import { AvatarWrapper, StyledAvatar, Name } from './StyledComponent'

export const Avatar: FC = () => {
  return (
    <AvatarWrapper>
      <StyledAvatar />
      <Name>{getCookie(ENameCookie.NAME)}</Name>
    </AvatarWrapper>
  )
}
