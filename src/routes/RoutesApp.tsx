import React, { FC, ReactNode, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage, ApiPage, KeyPage } from '../pages'

interface IRoutes {
  path: string
  component: ReactNode
}

const routes: IRoutes[] = [
  {
    path: '/',
    component: <AuthPage />,
  },
  {
    path: '/api',
    component: <ApiPage />,
  },
  {
    path: '/key',
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
