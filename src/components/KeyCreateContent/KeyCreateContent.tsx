import React, { FC, useState, useEffect } from 'react'
import {
  Button,
  Input,
  ButtonGroup,
  InputPassword,
  Select2,
  Option2,
  useNotifications,
} from '@inno/ui-kit'
import { useForm } from 'react-hook-form'
import { api, EApiUrl } from '../../api'
import { KeyObjectDto } from '../../interfaces'
import {
  KeyCreateContentWrapper,
  MainTitle,
  Title,
  FormPartLimit,
  InputFirst,
  InputSecond,
  StyledSelect,
  InputAuth,
  FormHorizantal,
  FromPartAuth,
  Label,
  FormLine,
} from './StyledComponed'
import { itemsSelect, defaultTime } from './data'

export interface IDataForm {
  name?: string
  period?: string
  quota?: string
  quotaRenewalRate?: string
  rate?: string
  login?: string
  apiId?: string
}

export const KeyCreateContent: FC = () => {
  const [periodTime, setPeriodTime] = useState<Option2>(defaultTime)
  const [quotaTime, setQuotaTime] = useState<Option2>(defaultTime)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { toast } = useNotifications()
  const DAY = '1'
  const SEC_IN_DAY = 86400

  const { register, handleSubmit, reset } = useForm<IDataForm>()

  useEffect(() => {
    if (error) {
      toast({
        duration: 3,
        status: 'critical',
        text: error,
      })
    }
  }, [error])

  const submitForm = (data: IDataForm) => {
    setError('')
    setLoading(true)
    const { period, rate, name, quota, quotaRenewalRate, login, apiId } = data
    const body: KeyObjectDto = {
      accessRights: [{ apiId: apiId as string }],
      basicAuthData: { password: password },
      limits: {
        period:
          periodTime.value === DAY
            ? Number(period) * SEC_IN_DAY
            : Number(period),
        rate: Number(rate),
      },
      name: name as string,
      keyId: login as string,
      quotas: {
        quota: Number(quota),
        quotaRenewalRate:
          quotaTime.value === DAY
            ? Number(quotaRenewalRate) * SEC_IN_DAY
            : Number(quotaRenewalRate),
        quotaRenews: 1637514000,
      },
    }
    console.log('body', body)
    api
      .post(EApiUrl.KEY_CREATE, body)
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
    setQuotaTime(defaultTime)
    setPeriodTime(defaultTime)
    setPassword('')
  }

  return (
    <KeyCreateContentWrapper>
      <form onSubmit={handleSubmit(submitForm)} onReset={resetForm}>
        <MainTitle>Новый ключ</MainTitle>
        <Title>Основные параметры</Title>
        <FormLine>
          <Input
            label='Название'
            required
            size='sm'
            isLabelRequired
            {...register('name')}
          />
        </FormLine>
        <FormLine>
          <Input
            info='Идентификатор ключа'
            label='Идентификатор'
            required
            size='sm'
            isLabelRequired
            {...register('apiId')}
          />
        </FormLine>
        <FormHorizantal>
          <FormLine>
            <FormPartLimit>
              <InputFirst
                label='Лимит запросов'
                required
                size='sm'
                isLabelRequired
                type='number'
                {...register('rate')}
              />
              <Label>за</Label>
              <InputSecond
                label=''
                required
                size='sm'
                type='number'
                {...register('period')}
              />
              <StyledSelect
                items={itemsSelect}
                value={periodTime}
                noOptionsMessage='Варианты не найдены'
                size='sm'
                placeholder=''
                onChange={(e) => setPeriodTime(e as Option2)}
              />
            </FormPartLimit>
          </FormLine>
          <FormPartLimit>
            <InputFirst
              label='Квота запросов'
              required
              size='sm'
              isLabelRequired
              type='number'
              {...register('quota')}
            />
            <Label>за</Label>
            <InputSecond
              label=''
              required
              size='sm'
              type='number'
              {...register('quotaRenewalRate')}
            />
            <StyledSelect
              items={itemsSelect}
              value={quotaTime}
              noOptionsMessage='Варианты не найдены'
              size='sm'
              placeholder=''
              onChange={(e) => setQuotaTime(e as Option2)}
            />
          </FormPartLimit>
        </FormHorizantal>
        <Title>Авторизация</Title>
        <FormLine>
          <Select2
            disabled
            items={[]}
            defaultValue={[
              {
                label: 'Basic authentification',
                value: '1',
              },
            ]}
            noOptionsMessage='Варианты не найдены'
            size='sm'
            placeholder=''
          />
        </FormLine>
        <FromPartAuth>
          <InputAuth
            label='Логин'
            required
            size='sm'
            isLabelRequired
            {...register('login')}
          />
          <InputPassword
            label='Пароль'
            size='sm'
            isLabelRequired
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FromPartAuth>
        <ButtonGroup type='primary'>
          <Button
            text='Создать'
            buttonType='submit'
            loading={loading}
            disabled={loading}
          />
          <Button text='Отменить' buttonType='reset' disabled={loading} />
        </ButtonGroup>
      </form>
    </KeyCreateContentWrapper>
  )
}
