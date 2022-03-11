import { Button, Option2 } from '@inno/ui-kit'
import { toJS } from 'mobx'
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  AccessRightsObject,
  AllowedUrlObject,
  LimitObject,
  QuotaObject,
} from '../../../interfaces'
import { apiListStore, availableApi } from '../../../store'
import {
  FormLine,
  FormLineShort2,
  FormSection,
  FullSelect,
  InputPeriod,
  InputRate,
  Label,
  PeriodTime,
  StyledButtonGroup,
  StyledInputFull,
} from '../StyledComponent'
import { defaultTime, itemsSelect } from '../KeyForm/data'
import { methodsApi } from './data'
import { AddingApiFormProps } from './types'

export const AddingApiForm: FC<AddingApiFormProps> = ({ toggleModal }) => {
  const { register, handleSubmit, setValue } = useForm()
  const [apiId, setApiId] = useState<Option2>()
  const [versionApi, setVersionApi] = useState<Option2[]>([])
  const [chosenMethodsApi, setChosenMethodsApi] = useState<Option2[]>([])
  const [periodTime, setPeriodTime] = useState<Option2>(defaultTime)
  const [quotaTime, setQuotaTime] = useState<Option2>(defaultTime)
  const { addApi, editableApiData, editableApiName } = availableApi
  const {
    availableApisList,
    isEmptyApiList,
    getApiList,
    chooseApi,
    versionChosenApi,
  } = apiListStore
  const dayPeriod = periodTime.value === '1'
  const dayQuota = quotaTime.value === '1'
  const secondsInDay = 86400

  useEffect(() => {
    if (!isEmptyApiList) {
      getApiList()
    }
  }, [])

  useEffect(() => {
    if (editableApiName) {
      const { limits, quotas, allowedUrls, apiId, versions } =
        editableApiData as AccessRightsObject
      const { rate, period } = limits as LimitObject
      const { quota, quotaRenewalRate } = quotas as QuotaObject
      // @ts-ignore
      const { url, methods } = allowedUrls[0] as AllowedUrlObject
      setValue('yourDetails', {
        rate: rate as Number,
        period: period as Number,
        quota: quota as Number,
        quotaRenewalRate: quotaRenewalRate as Number,
        url,
      })
      setVersionApi(
        versionChosenApi.filter((version) =>
          versions?.find((item) => item === version.label)
        )
      )
      console.log(toJS(editableApiData))
      setChosenMethodsApi(
        methodsApi.filter((method) =>
          methods?.find((item) => item === method.label)
        )
      )
      setApiId({ label: apiId, value: '0' } as Option2)
    }
  }, [editableApiName])

  const onChangeApi = (e: Option2): void => {
    setApiId(e)
    setVersionApi([])
    chooseApi(e.label)
  }

  const onSubmit = (data: any): void => {
    const { url, period, rate, quota, quotaRenewalRate } = data.yourDetails
    const createdApi: AccessRightsObject = {
      allowedUrls: [
        {
          methods: chosenMethodsApi?.map((method) => method.label),
          url,
        },
      ],
      apiId: apiId?.label as string,
      limits: {
        rate,
        period: dayPeriod ? Number(period) * secondsInDay : Number(period),
      },
      quotas: {
        quota: dayQuota ? Number(quota) * secondsInDay : Number(quota),
        quotaRenewalRate,
        // поле будет удалено, пока она обязательное
        quotaRenews: 1,
      },
      versions: versionApi?.map((method) => method.label),
    }
    addApi(createdApi)
    toggleModal()
  }

  return (
    <form>
      <FormSection>
        <FormLine>
          <FullSelect
            items={availableApisList}
            value={apiId}
            noOptionsMessage='Нет доступных Api'
            size='sm'
            label='Идентификатор API'
            placeholder='Выберите'
            disabled={!!editableApiName}
            onChange={(e) => onChangeApi(e as Option2)}
          />
        </FormLine>
        <FormLine>
          <FullSelect
            isClearable
            items={versionChosenApi || []}
            value={versionApi}
            noOptionsMessage='Варианты не найдены'
            size='sm'
            label='Версии'
            placeholder='Выберите'
            disabled={!apiId}
            onChange={(e) => setVersionApi(e as Option2[])}
            layout='multipleFixed'
          />
        </FormLine>
        <FormLineShort2>
          <InputRate
            label='Лимит запросов'
            required
            size='sm'
            isLabelRequired
            type='number'
            {...register('yourDetails.rate')}
          />
          <Label>за</Label>
          <InputPeriod
            label=''
            required
            size='sm'
            type='number'
            {...register('yourDetails.period')}
          />
          <PeriodTime
            items={itemsSelect}
            value={periodTime}
            noOptionsMessage='Варианты не найдены'
            size='sm'
            placeholder=''
            onChange={(e) => setPeriodTime(e as Option2)}
          />
        </FormLineShort2>
        <FormLineShort2>
          <InputRate
            label='Квота запросов'
            required
            size='sm'
            isLabelRequired
            type='number'
            {...register('yourDetails.quota')}
          />
          <Label>за</Label>
          <InputPeriod
            label=''
            required
            size='sm'
            type='number'
            {...register('yourDetails.quotaRenewalRate')}
          />
          <PeriodTime
            items={itemsSelect}
            value={quotaTime}
            noOptionsMessage='Варианты не найдены'
            size='sm'
            placeholder=''
            onChange={(e) => setQuotaTime(e as Option2)}
          />
        </FormLineShort2>
      </FormSection>
      <FormSection>
        <FormLine>
          <h6>Endpoints</h6>
        </FormLine>
        <FormLine>
          <FullSelect
            isClearable
            items={methodsApi}
            value={chosenMethodsApi}
            noOptionsMessage='Варианты не найдены'
            size='sm'
            label='Методы'
            placeholder='Выберите'
            onChange={(e) => setChosenMethodsApi(e as Option2[])}
            layout='multipleFixed'
          />
        </FormLine>
        <FormLine>
          <StyledInputFull
            label='URL в виде регулярного выражения'
            required
            size='sm'
            isLabelRequired
            {...register('yourDetails.url')}
          />
        </FormLine>
      </FormSection>
      <StyledButtonGroup type='primary'>
        <Button
          text={editableApiName ? 'Сохранить' : 'Добавить'}
          buttonType='button'
          loading={false}
          disabled={false}
          onClick={handleSubmit(onSubmit)}
        />
        <Button
          text='Отменить'
          buttonType='button'
          disabled={false}
          onClick={toggleModal}
        />
      </StyledButtonGroup>
    </form>
  )
}
