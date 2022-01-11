import React, { FC, ReactNode, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage, ApiPage, KeyPage } from '../pages'

interface IRoutes {
  path: string
  component: ReactNode
}

export enum ERoutesPath {
  AUTH_PAGE = '/',
  API_PAGE = '/api',
  KEY_PAGE = '/key',
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
]

export const RoutesApp: FC = () => {
  const routesApp: ReactElement[] = routes.map(
    ({ path, component }, id): ReactElement => (
      <Route key={id} path={path} element={component} />
    )
  )
  return <Routes>{routesApp}</Routes>
}
