import React, { FC } from 'react'
import styled from 'styled-components'
import { ApiPageContent } from '../components'
import { Loyout } from '../loyout/indext'

export const ApiPage: FC = () => {
  return (
    <Loyout>
      <ApiPageContent />
    </Loyout>
  )
}
