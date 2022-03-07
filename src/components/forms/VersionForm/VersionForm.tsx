import React, { FC, useCallback } from 'react'
import {
  Button,
  ButtonGroup,
  Checkbox,
  Col,
  DatePicker,
  Input,
} from '@inno/ui-kit'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { SpecificationField } from '../../SpecificationField'
import { FormRow, FormSection, LabelField } from '../StyledComponent'

export interface VersionFormProps {
  edit?: boolean
  initialValues?: VersionFormValues
}

export interface VersionFormValues {
  versionName: string
  expires: string
  apiSpecification: string
  newSpecification: boolean
}

const defaultValues: VersionFormValues = {
  versionName: '',
  expires: '',
  apiSpecification: '',
  newSpecification: false,
}

export const VersionForm: FC<VersionFormProps> = ({ edit, initialValues }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<VersionFormValues>({
    defaultValues: initialValues ? initialValues : defaultValues,
  })

  const submit: SubmitHandler<VersionFormValues> = (values) =>
    console.log(values)

  const handleReset = useCallback(() => reset(), [reset])

  const newSpecification = watch('newSpecification')

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormRow>
        <Col col='8'>
          <Input
            label='Название'
            isLabelRequired
            info='Название версии'
            infoPlacement='top'
            size='sm'
            notificationStatus={errors.versionName && 'error'}
            notifications={errors.versionName && [errors.versionName.message!]}
            {...register('versionName', {
              required: 'Обязательно для заполнения',
            })}
          />
        </Col>
        <Col col='4'>
          <Controller
            name='expires'
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label='Истекает'
                shouldOpenOnFocus
                shouldSubmitOnBlur
                onChange={(date: any) => onChange(date.$d)}
                value={value}
              />
            )}
          />
        </Col>
      </FormRow>

      <FormSection>
        {edit ? (
          <>
            <FormRow>
              <Controller
                name='newSpecification'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    label='Загрузить новую спецификацию'
                    checked={value}
                    onChange={(event) => onChange(event.target.checked)}
                  />
                )}
              />
            </FormRow>
            {newSpecification && (
              <FormRow>
                <LabelField>Спецификация*</LabelField>
                <Controller
                  name='apiSpecification'
                  control={control}
                  rules={{
                    required: 'Загрузите файл спецификации',
                  }}
                  render={({ field: { onChange } }) => (
                    <SpecificationField
                      onChange={onChange}
                      error={errors.apiSpecification?.message}
                    />
                  )}
                />
              </FormRow>
            )}
          </>
        ) : (
          <FormRow>
            <LabelField>Спецификация*</LabelField>
            <Controller
              name='apiSpecification'
              control={control}
              rules={{
                required: 'Загрузите файл спецификации',
              }}
              render={({ field: { onChange } }) => (
                <SpecificationField
                  onChange={onChange}
                  error={errors.apiSpecification?.message}
                />
              )}
            />
          </FormRow>
        )}
      </FormSection>

      <ButtonGroup>
        <Button buttonType='submit'>Добавить</Button>
        <Button onClick={handleReset}>Отменить</Button>
      </ButtonGroup>
    </form>
  )
}
