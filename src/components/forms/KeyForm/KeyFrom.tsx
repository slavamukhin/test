import { Button, Checkbox, InputPassword, useNotifications } from '@inno/ui-kit'
import { useKeycloak } from '@react-keycloak/web'
import React, { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import styled from 'styled-components'
import { EApiUrl } from '../../../api'
import { apiListStore, availableApi, keyStore } from '../../../store'
import { AddingApi } from '../../AddingApi'
import {
  FormSection,
  FormLine,
  StyledInput,
  WrapperColumn,
  StyledButtonGroup,
  StyledSelect,
} from '../StyledComponent'
import { defaultAuthentification } from './data'
import { useSubmitForm } from './useSubmitForm'
import { AccessRightsObject, KeyObjectDto } from '../../../interfaces'
import { observer } from 'mobx-react-lite'

export interface IDataForm {
  name?: string
  keyId?: string
  password?: string
}

export const Error = styled.div`
  color: red;
  font-size: 14px;
`

export interface KeyFormProps {
  edit?: boolean
  resetForm: () => void
  initialValues?: any
  api?: any
  formValues?: KeyObjectDto
  data?: boolean
  keyId?: string
}

export const KeyForm: FC<KeyFormProps> = observer(
  ({ resetForm, edit, formValues, keyId }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { toast } = useNotifications()
    const { isEmptyApiList, getApiList } = apiListStore
    const { availableApiList, clearAvailableApiList, setAllApi } = availableApi
    const { initialized } = useKeycloak()
    const [validateApi, setValidateApi] = useState(false)
    const [notAuth, setNotAuth] = useState(false)
    const { data } = keyStore
    const submitForm = useSubmitForm(
      edit ? EApiUrl.KEY_CREATE + keyId : EApiUrl.KEY_CREATE
    )
    const method = edit ? 'put' : 'post'
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      setValue,
    } = useForm<IDataForm>()

    useEffect(() => {
      if (error) {
        toast({
          duration: 3,
          status: 'critical',
          text: error,
        })
      }
    }, [error])

    useEffect(() => {
      if (!isEmptyApiList && initialized) {
        getApiList()
      }
    }, [initialized])

    useEffect(() => {
      if (availableApiList.length) {
        setValidateApi(false)
      }
    }, [availableApiList])

    useEffect(() => {
      if (data) {
        setValue('name', formValues?.name)
        setValue('keyId', formValues?.keyId)
        setAllApi(formValues?.accessRights as AccessRightsObject[])
      }
    }, [data])

    const submit: SubmitHandler<IDataForm> = (data: IDataForm) => {
      if (!availableApiList.length) {
        setValidateApi(true)
        return
      }
      submitForm(data, setError, setLoading, availableApiList, method)
      clearAvailableApiList()
    }

    return (
      <>
        <form>
          <FormSection>
            {!edit && (
              <FormLine>
                <h6>Основные параметры</h6>
              </FormLine>
            )}
            <FormLine>
              <StyledInput
                label='Название'
                required
                size='sm'
                isLabelRequired
                notificationStatus={errors.name && 'error'}
                {...register('name', { required: true })}
              />
              <StyledInput
                info='Идентификатор ключа'
                label='Идентификатор'
                required
                size='sm'
                isDisabled={edit}
                isLabelRequired
                notificationStatus={errors.keyId && 'error'}
                {...register('keyId', { required: true })}
              />
            </FormLine>
          </FormSection>
          <FormSection>
            {edit ? (
              <>
                <FormLine>
                  <StyledSelect
                    disabled
                    items={[]}
                    defaultValue={defaultAuthentification}
                    noOptionsMessage='Варианты не найдены'
                    size='sm'
                    placeholder=''
                    label={'Тип авторизации'}
                  />
                </FormLine>
                <FormLine>
                  <Checkbox
                    label='Сменить пароль'
                    size='sm'
                    checked={notAuth}
                    onChange={(e) => setNotAuth(!notAuth)}
                  />
                </FormLine>
                {notAuth && (
                  <WrapperColumn>
                    <Controller
                      control={control}
                      name='password'
                      rules={{ required: true }}
                      render={({ field }) => (
                        <InputPassword
                          label='Пароль'
                          size='sm'
                          isLabelRequired
                          required
                          notificationStatus={errors.password && 'error'}
                          {...field}
                        />
                      )}
                    />
                  </WrapperColumn>
                )}
              </>
            ) : (
              <>
                <FormLine>
                  <StyledSelect
                    disabled
                    items={[]}
                    defaultValue={defaultAuthentification}
                    noOptionsMessage='Варианты не найдены'
                    size='sm'
                    placeholder=''
                    label={'Тип авторизации'}
                  />
                  <WrapperColumn>
                    <Controller
                      control={control}
                      name='password'
                      rules={{ required: true }}
                      render={({ field }) => (
                        <InputPassword
                          label='Пароль'
                          size='sm'
                          isLabelRequired
                          required
                          notificationStatus={errors.password && 'error'}
                          {...field}
                        />
                      )}
                    />
                  </WrapperColumn>
                </FormLine>
              </>
            )}
          </FormSection>
        </form>
        {!edit && (
          <FormSection>
            <FormLine>
              <h6>Доступные API</h6>
            </FormLine>
            <>
              <AddingApi />
              {validateApi && (
                <Error>Необходимо добавить хотябы одно api</Error>
              )}
            </>
          </FormSection>
        )}

        <StyledButtonGroup type='primary'>
          <Button
            text={!edit ? 'Создать' : 'Сохранить'}
            buttonType='submit'
            loading={loading}
            disabled={loading}
            onClick={handleSubmit(submit)}
          />
          <Button
            text='Отменить'
            buttonType='reset'
            onClick={resetForm}
            disabled={loading}
          />
        </StyledButtonGroup>
      </>
    )
  }
)
