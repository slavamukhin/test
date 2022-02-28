import { ApiObject } from '../../../interfaces'

export interface IDataForm {
  name?: string
  apiId?: string
  rate?: string
  period?: string
  listenPath?: string
  targetUrl?: string
  versionLocationKey?: string
  login?: string
  versionName?: string
}

export interface ApiFormProps {
  edit?: boolean
  resetForm: () => void
  initialValues?: any
  api?: any
  formValues?: ApiObject
  data?: boolean
  apiId?: string
}
