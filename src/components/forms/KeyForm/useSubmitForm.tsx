import { api, EApiUrl } from '../../../api'
import {
  AccessRightsObject,
  KeyObjectDto,
  VersionsDataObject,
} from '../../../interfaces'
import { useNavigate } from 'react-router-dom'
import { ERoutesPath } from '../../../routes'
import { Option2 } from '@inno/ui-kit'
import { IDataForm } from './KeyFrom'

export const useSubmitForm = (url: string) => {
  const navigate = useNavigate()
  const DAY = '1'
  const SEC_IN_DAY = 86400

  const submitForm = (
    data: any,
    setError: (val: string) => void,
    setLoading: (val: boolean) => void,
    availableApiList: Array<AccessRightsObject>,
    method: 'put' | 'post'
  ) => {
    setError('')
    setLoading(true)
    const { name, keyId, password } = data
    const body: KeyObjectDto = {
      accessRights: availableApiList,
      basicAuthData: { password: password as string },
      name: name as string,
      keyId: keyId as string,
    }
    api[method](url, body)
      .then(() => {
        setLoading(false)
        method === 'put' ? navigate(0) : navigate(ERoutesPath.KEY_LIST_PAGE)
      })
      .catch((err: Error) => {
        setLoading(false)
        setError(err.message)
      })
  }

  return submitForm
}
