import { ReactElement } from 'react'

export interface IContent {
  children: ReactElement
  auth?: boolean
}

export type IContentWrapper = Pick<IContent, 'auth'>
