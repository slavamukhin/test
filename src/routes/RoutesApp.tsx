import React, { FC, ReactNode, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage, ApiPage, KeyPage, KeyCreate, ApiCreate } from '../pages'

interface IRoutes {
  path: string
  component: ReactNode
}

export enum ERoutesPath {
  AUTH_PAGE = '/',
  API_PAGE = '/api',
  KEY_PAGE = '/key',
  KEY_CREATE = '/key/create',
  API_CREATE = '/api/create',
}

const routes: IRoutes[] = [
  {
    path: ERoutesPath.AUTH_PAGE,
    component: <AuthPage />,
  },
  {
    path: ERoutesPath.API_PAGE,
    component: <ApiPage />,
  },
  {
    path: ERoutesPath.KEY_PAGE,
    component: <KeyPage />,
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
