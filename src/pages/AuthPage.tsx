import React, { FC } from 'react'
import styled from 'styled-components'
import { AuthPageContent } from '../components'
import { Loyout } from '../loyout/indext'

export const AuthPage: FC = () => {
  return (
    <Loyout auth>
      <AuthPageContent />
    </Loyout>
  )
}
