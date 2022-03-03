import {
  Button,
  Error403Component,
  Error50xComponent,
  ErrorSwitcherComponent,
} from '@inno/ui-kit'
import React, { FC } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { Layout } from '../layout'
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
  FOR_O_TRREE = '/403',
  FIVE_O_X = '/500',
  FOR_O_FOR = '/404',
  PATH_NOT_FOUND = '*',
}
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`

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
  {
    path: ERoutesPath.FOR_O_TRREE,
    element: (
      <Layout>
        <Wrapper>
          <Error403Component />
        </Wrapper>
      </Layout>
    ),
  },
  {
    path: ERoutesPath.FIVE_O_X,
    element: (
      <Layout>
        <Wrapper>
          <Error50xComponent />
        </Wrapper>
      </Layout>
    ),
  },
  {
    path: ERoutesPath.FOR_O_FOR,
    element: (
      <Layout>
        <Wrapper>
          <ErrorSwitcherComponent
            actionButton={
              <Button
                onClick={() =>
                  window.location.replace(ERoutesPath.API_LIST_PAGE)
                }
                text='Вернуться на главную страницу'
                type='ghost'
              />
            }
            status={404}
          />
        </Wrapper>
      </Layout>
    ),
  },
  {
    path: ERoutesPath.PATH_NOT_FOUND,
    element: (
      <Layout>
        <Wrapper>
          <ErrorSwitcherComponent
            actionButton={
              <Button
                onClick={() =>
                  window.location.replace(ERoutesPath.API_LIST_PAGE)
                }
                text='Вернуться на главную страницу'
                type='ghost'
              />
            }
            status={404}
          />
        </Wrapper>
      </Layout>
    ),
  },
]

export const RoutesApp: FC = () => {
  const element = useRoutes(routes)

  return element
}
