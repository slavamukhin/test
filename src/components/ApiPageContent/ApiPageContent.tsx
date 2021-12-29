import React, { FC } from 'react'
import styled from 'styled-components'
import { apiStore } from '../../store'
import { observer } from 'mobx-react-lite'

export const ApiPageContent: FC = observer(() => {
  const { apiValue, getApi } = apiStore

  return (
    <div>
      <h1>ApiPageContent</h1>
      <div>{apiValue}</div>
      <button onClick={getApi}>Test</button>
    </div>
  )
})
