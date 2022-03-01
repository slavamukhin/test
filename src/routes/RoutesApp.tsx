import React, { FC } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import {
  AuthPage,
  ApiListPage,
  KeyListPage,
  KeyCreate,
  ApiCreate,
  KeyPage
} from '../pages'

export enum ERoutesPath {
  AUTH_PAGE = '/',
  API_PAGE = '/ui-api',
  KEY_LIST_PAGE = '/ui-key',
  KEY_CREATE = '/ui-key/create',
  API_CREATE = '/ui-api/create',
}

const routes: RouteObject[] = [
  {
    path: ERoutesPath.AUTH_PAGE,
    element: <AuthPage />,
  },
  {
    path: ERoutesPath.API_PAGE,
    element: <ApiListPage />,
  },
  {
    path: ERoutesPath.KEY_LIST_PAGE,
    element: <KeyListPage />,
  },
  {
    path: `${ERoutesPath.KEY_LIST_PAGE}/:id`,
    element: <KeyPage />,
  },
  {
    path: ERoutesPath.KEY_CREATE,
    element: <KeyCreate />,
  },
  {
    path: ERoutesPath.API_CREATE,
    element: <ApiCreate />,
  },
]

export const RoutesApp: FC = () => {
  const element = useRoutes(routes)

  return element
}
