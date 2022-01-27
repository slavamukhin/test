import React, { FC } from 'react'
import { MainTitlt, ApiCreateWrapper } from './StyledComponent'
import { ApiForm } from '../ApiForm'
import { ERoutesPath } from '../../routes'
import { useNavigate } from 'react-router-dom'

export const ApiCreateContent: FC = () => {
  const navigane = useNavigate()

  const resetForm = () => {
    navigane(ERoutesPath.API_PAGE)
  }

  return (
    <ApiCreateWrapper>
      <MainTitlt>Новое API</MainTitlt>
      <ApiForm resetForm={resetForm} />
    </ApiCreateWrapper>
  )
}
