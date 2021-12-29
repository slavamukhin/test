import React, { FC } from 'react'
import styled from 'styled-components'
import { keyStore } from '../../store'
import { observer } from 'mobx-react-lite'

export const KeyPageContent: FC = observer(() => {
  const { getKey, keyValue } = keyStore
  return (
    <div>
      <h1>KeyPageContent</h1>
      <div>{keyValue}</div>
      <button onClick={getKey}>Test</button>
    </div>
  )
})
