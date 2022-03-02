import { Button, Checkbox } from '@inno/ui-kit'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputFile } from '../../InputFile'
import {
  FormLine,
  FormSection,
  LabelField,
  StyledButtonGroup,
  StyledDatePickerSmall,
  StyledInputBig,
} from '../StyledComponent'

export interface AddingVersionFormProps {
  edit?: boolean
}

export const AddingVersionForm: FC<AddingVersionFormProps> = ({ edit }) => {
  const { register, handleSubmit, setValue } = useForm()
  const [expiresDate, setExpiresDate] = useState<string>('')
  const [defaultVersion, setDefaultVersion] = useState(false)
  const [specification, setSpecification] = useState(false)
  const [error, setError] = useState('')
  const [jsonContent, setJsonContent] = useState('')

  return (
    <form>
      <FormLine>
        <StyledInputBig
          label='Назание'
          required
          size='sm'
          isLabelRequired
          info='Название версии'
          infoPlacement='top'
          infoSize='sm'
          {...register('yourDetails.name')}
        />
        <StyledDatePickerSmall
          label='Истекает'
          shouldOpenOnFocus
          shouldSubmitOnBlur
          size='sm'
          onChange={(e: any) => setExpiresDate(e.$d as string)}
        />
      </FormLine>
      <FormLine>
        <Checkbox
          label='Версия по умолчанию'
          size='sm'
          checked={defaultVersion}
          onChange={(e) => setDefaultVersion(!defaultVersion)}
        />
      </FormLine>
      {edit ? (
        <>
          <FormLine>
            <Checkbox
              label='Загрузить новую спецификацию'
              size='sm'
              checked={specification}
              onChange={(e) => setSpecification(!specification)}
            />
          </FormLine>
          {specification && (
            <FormSection>
              <LabelField>Спецификация</LabelField>
              <InputFile setError={setError} setJsonContent={setJsonContent} />
            </FormSection>
          )}
        </>
      ) : (
        <FormSection>
          <LabelField>Спецификация</LabelField>
          <InputFile setError={setError} setJsonContent={setJsonContent} />
        </FormSection>
      )}

      <StyledButtonGroup type='primary'>
        <Button
          text={!edit ? 'Добавить' : 'Сохранить'}
          buttonType='submit'
          disabled={!!error}
        />
        <Button text='Отменить' buttonType='reset' />
      </StyledButtonGroup>
    </form>
  )
}
