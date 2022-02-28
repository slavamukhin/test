import React, { FC } from 'react'
import { ApiList } from '../components/ApiList'
import { ApiListHeader } from '../components/ApiListHeader'
import { ApiListHeadline } from '../components/ApiListHeadline'
import { MainLayout } from '../layout/MainLayout'

export const ApiListPage: FC = () => (
  <MainLayout>
    <ApiListHeadline />
    <ApiListHeader />
    <ApiList />
  </MainLayout>
)
