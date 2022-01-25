import React, { FC, useEffect, useState } from 'react'
import {
  Button,
  Checkbox,
  InputPassword,
  Option2,
  useNotifications,
} from '@inno/ui-kit'
import {
  MainTitlt,
  LabelField,
  FormSection,
  LastFormSection,
  FormLine,
  FormLineShort,
  ApiCreateWrapper,
  StyledInput,
  Label,
  InputRate,
  InputPeriod,
  PeriodTime,
  VersionSelect,
  AuthSelect,
  WrapperColumn,
  VersionNameInput,
  StyledDatePicker,
  StyledButtonGroup,
} from './StyledComponent'
import { itemsSelectVersion } from './data'
import {
  defaultAuthentification,
  defaultTime,
  defaultVersion,
  itemsSelect,
} from '../KeyCreateContent/data'
import { useForm } from 'react-hook-form'
import { ApiObject } from '../../interfaces'
import { api, EApiUrl } from '../../api'
import { InputFile } from '../InputFile'

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

export const ApiCreateContent: FC = () => {
  const { register, handleSubmit, reset } = useForm<IDataForm>({
    defaultValues: { versionName: '1.0' },
  })
  const [periodTime, setPeriodTime] = useState<Option2>(defaultTime)
  const [notVersioned, setNotVersioned] = useState(false)
  const [versionLocationKey, setVersionLocationKey] =
    useState<Option2>(defaultVersion)
  const [password, setPassword] = useState('')
  const [expiresDate, setExpiresDate] = useState<{ $d: string } | null>()
  const [jsonContent, setJsonContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { toast } = useNotifications()

  useEffect(() => {
    console.log('error')
    if (error) {
      toast({
        duration: 3,
        status: 'critical',
        text: error,
      })
    }
  }, [error])

  const submitForm = (data: IDataForm): void => {
    setError('')
    setLoading(true)
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
    } = data
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
        period: Number(period),
      },
      listenPath: listenPath as string,
      name: name as string,
      targetUrl: targetUrl as string,
      versionData: {
        notVersioned,
        versionLocationKey,
        versions: [
          {
            apiSpecification: JSON.parse(jsonContent),
            expires: expiresDate?.$d as string,
            versionName,
          },
        ],
      },
    }

    console.log('body', body)

    api
      .post(EApiUrl.API_CREATE, body)
      .then(() => {
        setLoading(false)
        resetForm()
      })
      .catch((err: Error) => {
        setLoading(false)
        console.log(err)
        setError(err.message)
      })
  }

  const resetForm = () => {
    reset()
    setPeriodTime(defaultTime)
    setNotVersioned(false)
    setVersionLocationKey(defaultVersion)
    setPassword('')
    setExpiresDate(null)
    setJsonContent('')
    setError('')
  }

  return (
    <ApiCreateWrapper>
      <MainTitlt>Новое API</MainTitlt>
      <form onSubmit={handleSubmit(submitForm)} onReset={resetForm}>
        <FormSection>
          <FormLine>
            <h6>Основные параметры</h6>
          </FormLine>
          <FormLine>
            <StyledInput
              label='Название'
              required
              size='sm'
              isLabelRequired
              {...register('name')}
            />
            <StyledInput
              label='Идентификатор'
              required
              size='sm'
              isLabelRequired
              info='Разрешены: 0-9, A-z, точка и дефис'
              infoPlacement='top'
              infoSize='sm'
              {...register('apiId')}
            />
          </FormLine>
          <FormLine>
            <StyledInput
              label='Listen Path'
              required
              size='sm'
              isLabelRequired
              {...register('listenPath')}
            />
            <StyledInput
              label='Target URL'
              required
              size='sm'
              isLabelRequired
              {...register('targetUrl')}
            />
          </FormLine>
          <FormLineShort>
            <InputRate
              label='Лимит запросов'
              required
              size='sm'
              isLabelRequired
              type='number'
              {...register('rate')}
            />
            <Label>за</Label>
            <InputPeriod
              label=''
              required
              size='sm'
              type='number'
              {...register('period')}
            />
            <PeriodTime
              items={itemsSelect}
              noOptionsMessage='Варианты не найдены'
              size='sm'
              placeholder=''
              value={periodTime}
              onChange={(e) => setPeriodTime(e as Option2)}
            />
          </FormLineShort>
          <FormLine>
            <Checkbox
              label='Включить версионирование'
              size='sm'
              checked={notVersioned}
              onChange={(e) => setNotVersioned(!notVersioned)}
            />
          </FormLine>
          {notVersioned && (
            <FormLine>
              <StyledInput
                label='Ключ запроса версии'
                required
                size='sm'
                isLabelRequired
                {...register('versionLocationKey')}
              />
              <VersionSelect
                label='Способ передачи версии'
                items={itemsSelectVersion}
                noOptionsMessage='Варианты не найдены'
                size='sm'
                placeholder=''
                value={versionLocationKey}
                onChange={(e) => setVersionLocationKey(e as Option2)}
              />
            </FormLine>
          )}
        </FormSection>
        <FormSection>
          <FormLine>
            <h6>Авторизация</h6>
          </FormLine>
          <FormLineShort>
            <AuthSelect
              disabled
              items={[]}
              defaultValue={defaultAuthentification}
              size='sm'
            />
          </FormLineShort>
          <FormLine>
            <StyledInput
              label='Логин'
              required
              size='sm'
              isLabelRequired
              {...register('login')}
            />
            <WrapperColumn>
              <InputPassword
                label='Пароль'
                size='sm'
                isLabelRequired
                required
                isAutoSized
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </WrapperColumn>
          </FormLine>
        </FormSection>
        <LastFormSection>
          <FormLine>
            <h6>Версия по умолчанию</h6>
          </FormLine>
          <FormLineShort>
            <VersionNameInput
              label='Название'
              required
              size='sm'
              isLabelRequired
              info='Версия по умолчанию'
              infoPlacement='top'
              infoSize='sm'
              {...register('versionName')}
            />
            <StyledDatePicker
              label='Истекает'
              shouldOpenOnFocus
              shouldSubmitOnBlur
              size='sm'
              value={expiresDate}
              onChange={(e) => setExpiresDate(e as { $d: string })}
            />
          </FormLineShort>
          <LabelField>Спецификация</LabelField>
          <InputFile setError={setError} setJsonContent={setJsonContent} />
        </LastFormSection>
        <StyledButtonGroup type='primary'>
          <Button
            text='Создать'
            buttonType='submit'
            loading={loading}
            disabled={loading || !!error}
          />
          <Button text='Отменить' buttonType='reset' disabled={loading} />
        </StyledButtonGroup>
      </form>
    </ApiCreateWrapper>
  )
}
