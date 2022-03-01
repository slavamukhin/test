import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ERoutesPath } from '../../routes'
import { ApiCreateWrapper, MainTitlt } from '../forms/StyledComponent'
import { KeyForm } from '../forms/KeyForm'

export const KeyCreateContent: FC = () => {
  const navigane = useNavigate()

  const resetForm = () => {
    navigane(ERoutesPath.KEY_LIST_PAGE)
  }

  return (
    <ApiCreateWrapper>
      <MainTitlt>Новый ключ</MainTitlt>
      <KeyForm resetForm={resetForm} />
    </ApiCreateWrapper>
  )
}
