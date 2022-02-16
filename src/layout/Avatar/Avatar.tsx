import { useKeycloak } from '@react-keycloak/web'
import React, { FC } from 'react'
import { AvatarWrapper, StyledAvatar, Name } from './StyledComponent'

export const Avatar: FC = () => {
  const { keycloak } = useKeycloak()

  return (
    <AvatarWrapper>
      <StyledAvatar />
      <Name>{keycloak.subject}</Name>
    </AvatarWrapper>
  )
}
