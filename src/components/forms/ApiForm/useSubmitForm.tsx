import { api } from '../../../api'
import { ApiObject, VersionsDataObject } from '../../../interfaces'
import { useNavigate } from 'react-router-dom'
import { ERoutesPath } from '../../../routes'
import { Option2 } from '@inno/ui-kit'

export const useSubmitForm = (url: string) => {
  const navigate = useNavigate()

  const submitForm = (
    data: any,
    setError: (val: string) => void,
    setLoading: (val: boolean) => void,
    password: string | undefined,
    notVersioned: boolean,
    jsonContent: string,
    expiresDate: string,
    versionLocation: string,
    periodTime: Option2,
    method: 'put' | 'post'
  ): void => {
    const day = periodTime.value === '1'
    const secondsInDay = 86400
    setError('')
    setLoading(true)
    const { yourDetails } = data
    const {
      name,
      apiId,
      listenPath,
      targetUrl,
      rate,
      period,
      versionLocationKey,
      login,
      versionName,
    } = yourDetails
    const body: ApiObject = {
      apiAuthentication: {
        basicAuth: {
          login,
          password,
        },
      },
      apiId: apiId as string,
      limits: {
        rate: Number(rate),
        period: day ? Number(period) * secondsInDay : Number(period),
      },
      listenPath: listenPath as string,
      name: name as string,
      targetUrl: targetUrl as string,
      versionData: {
        // поле должно быть не обязательным, но пока оно такое
        defaultVersion: '',
        notVersioned,
        versionLocation:
          versionLocation === 'HEADER'
            ? VersionsDataObject.VersionLocationEnum.Header
            : VersionsDataObject.VersionLocationEnum.UrlParam,
        versionLocationKey,
        versions: [
          {
            apiSpecification: jsonContent && JSON.parse(jsonContent),
            expires: expiresDate,
            versionName,
          },
        ],
      },
    }

    api[method](url, body)
      .then(() => {
        method === 'put' ? navigate(0) : navigate(ERoutesPath.API_LIST_PAGE)
      })
      .catch((err: Error) => {
        setLoading(false)
        setError(err.message)
      })
  }

  return submitForm
}
