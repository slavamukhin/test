import React, { FC } from 'react'
import { AddedVersionModal } from '../components/AddedVersionModal/AddedVersionModal'
import { ApiList } from '../components/ApiList'
import { ApiListHeader } from '../components/ApiListHeader'
import { ApiListHeadline } from '../components/ApiListHeadline'
import { DeleteModal } from '../components/DeleteModel/DeleteModal'
import { MainLayout } from '../layout/MainLayout'

export const ApiListPage: FC = () => (
  <MainLayout>
    <ApiListHeadline />
    <ApiListHeader />
    <ApiList />
    {/* <DeleteModal content={<>auth-users</>} title={'Удалить доступ к API?'} />
    <AddedVersionModal /> */}
  </MainLayout>
)
