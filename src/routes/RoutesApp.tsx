import React, { FC, ReactNode, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  AuthPage,
  ApiListPage,
  KeyListPage,
  KeyCreate,
  ApiCreate
} from '../pages'

interface IRoutes {
  path: string
  component: ReactNode
}

export enum ERoutesPath {
  AUTH_PAGE = '/',
  API_PAGE = '/ui-api',
  KEY_PAGE = '/ui-key',
  KEY_CREATE = '/ui-key/create',
  API_CREATE = '/ui-api/create',
}

const routes: IRoutes[] = [
  {
    path: ERoutesPath.AUTH_PAGE,
    component: <AuthPage />,
  },
  {
    path: ERoutesPath.API_PAGE,
    component: <ApiListPage />,
  },
  {
    path: ERoutesPath.KEY_PAGE,
    component: <KeyListPage />,
  },
  {
    path: ERoutesPath.KEY_CREATE,
    component: <KeyCreate />,
  },
  {
    path: ERoutesPath.API_CREATE,
    component: <ApiCreate />,
  },
]

export const RoutesApp: FC = () => {
  const routesApp: ReactElement[] = routes.map(
      ({ path, component }, id): ReactElement => (
        <Route key={id} path={path} element={component} />
      )
  )
  return <Routes>{routesApp}</Routes>
}
