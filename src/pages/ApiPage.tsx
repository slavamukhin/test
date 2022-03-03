import React, { FC } from 'react'
import { ApiView } from '../components/ApiView'
import { MainLayout } from '../layout/MainLayout'

export const ApiPage: FC = () => (
  <MainLayout>
    <ApiView />
  </MainLayout>
)
