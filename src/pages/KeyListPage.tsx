import React, { FC } from 'react'
import { KeyList } from '../components/KeyList'
import { KeyListHeader } from '../components/KeyListHeader'
import { KeyListHeadline } from '../components/KeyListHeadline'
import { MainLayout } from '../layout/MainLayout'

export const KeyListPage: FC = () => {
  return (
    <MainLayout>
      <KeyListHeadline />
      <KeyListHeader />
      <KeyList />
    </MainLayout>
  )
}
