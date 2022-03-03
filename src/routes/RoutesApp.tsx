import React, { FC } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import {
  ApiListPage,
  KeyListPage,
  KeyCreate,
  ApiCreate,
  KeyPage,
  ApiPage,
} from '../pages'

export enum ERoutesPath {
  INDEX_PAGE = '/',
  API_LIST_PAGE = '/ui-api',
  KEY_LIST_PAGE = '/ui-key',
  KEY_CREATE = '/ui-key/create',
  API_CREATE = '/ui-api/create',
}

const routes: RouteObject[] = [
  {
    path: ERoutesPath.INDEX_PAGE,
    element: <Navigate to={ERoutesPath.API_LIST_PAGE} />,
  },
  {
    path: ERoutesPath.API_LIST_PAGE,
    element: <ApiListPage />,
  },
  {
    path: `${ERoutesPath.API_LIST_PAGE}/:id`,
    element: <ApiPage />,
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
