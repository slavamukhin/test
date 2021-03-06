import React, { FC, useEffect, useState } from 'react'
import {
  LabelField,
  FormSection,
  LastFormSection,
  FormLine,
  FormLineShort,
  StyledInput,
  Label,
  InputRate,
  InputPeriod,
  PeriodTime,
  VersionSelect,
  WrapperColumn,
  VersionNameInput,
  StyledDatePicker,
  StyledButtonGroup,
  WrapperLoader,
  FullSelect,
} from '../StyledComponent'
import {
  Button,
  Checkbox,
  InputPassword,
  LoadingIndicator,
  Option2,
} from '@inno/ui-kit'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  defaultAuthentification,
  defaultTime,
  defaultVersion,
  itemsSelect,
} from '../KeyForm/data'
import { itemsSelectVersion } from '../../ApiCreateContent/data'
import { InputFile } from '../../InputFile'
import { useNotifications } from '@inno/ui-kit'
import { useSubmitForm } from './useSubmitForm'
import { EApiUrl } from '../../../api'
import { apiStore } from '../../../store'
import { observer } from 'mobx-react-lite'
import { ApiFormProps, IDataForm } from './types'

export const ApiForm: FC<ApiFormProps> = observer(
  ({ edit, resetForm, formValues, apiId }) => {
    const { register, handleSubmit, setValue } = useForm<any>()
    const [periodTime, setPeriodTime] = useState<Option2>(defaultTime)
    const [notVersioned, setNotVersioned] = useState(false)
    const [notAuth, setNotAuth] = useState(false)
    const [versionLocation, setVersionLocation] =
      useState<Option2>(defaultVersion)
    const [password, setPassword] = useState<string | undefined>('')
    const [expiresDate, setExpiresDate] = useState<string>('')
    const [jsonContent, setJsonContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { toast } = useNotifications()
    const submitForm = useSubmitForm(
      edit ? EApiUrl.API_CREATE + apiId : EApiUrl.API_CREATE
    )
    const { data, pending } = apiStore
    const method = edit ? 'put' : 'post'

    useEffect(() => {
      setValue('yourDetails', {
        ...formValues,
        rate: formValues?.limits?.rate,
        period: formValues?.limits?.period,
        versionLocationKey: formValues?.versionData?.versionLocationKey,
        login: formValues?.apiAuthentication?.basicAuth?.login,
        versionName:
          (formValues?.versionData?.versions?.length &&
            formValues?.versionData?.versions[0].versionName) ||
          '1.0',
      })
      setNotVersioned(!!formValues?.versionData?.notVersioned)
      setVersionLocation(
        formValues?.versionData?.versionLocation === 'HEADER'
          ? itemsSelectVersion[0]
          : itemsSelectVersion[1]
      )

      setJsonContent(
        JSON.stringify(
          formValues?.versionData?.versions?.length &&
            formValues?.versionData?.versions[0]?.apiSpecification
        )
      )
      setPassword(formValues?.apiAuthentication?.basicAuth?.password)
      setExpiresDate(
        (formValues?.versionData?.versions?.length &&
          `${formValues?.versionData?.versions[0].expires}`) ||
          ''
      )
    }, [data])

    useEffect(() => {
      if (error) {
        toast({
          duration: 3,
          status: 'critical',
          text: error,
        })
      }
    }, [error])

    const submit: SubmitHandler<IDataForm> = (data: IDataForm) => {
      submitForm(
        data,
        setError,
        setLoading,
        password,
        notVersioned,
        jsonContent,
        expiresDate,
        versionLocation.label,
        periodTime,
        method
      )
    }

    if (pending) {
      return (
        <WrapperLoader>
          <LoadingIndicator isVisible position='center' />
        </WrapperLoader>
      )
    }

    return (
      <form onSubmit={handleSubmit(submit)} onReset={resetForm}>
        <FormSection>
          <FormLine>
            <h6>???????????????? ??????????????????</h6>
          </FormLine>
          <FormLine>
            <StyledInput
              label='????????????????'
              required
              size='sm'
              isLabelRequired
              {...register('yourDetails.name')}
            />
            <StyledInput
              label='??????????????????????????'
              required
              size='sm'
              isDisabled={edit}
              isLabelRequired
              info='??????????????????: 0-9, A-z, ?????????? ?? ??????????'
              infoPlacement='top'
              infoSize='sm'
              {...register('yourDetails.apiId')}
            />
          </FormLine>
          <FormLine>
            <StyledInput
              label='Listen Path'
              required
              size='sm'
              isLabelRequired
              {...register('yourDetails.listenPath')}
            />
            <StyledInput
              label='Target URL'
              required
              size='sm'
              isLabelRequired
              {...register('yourDetails.targetUrl')}
            />
          </FormLine>
          <FormLineShort>
            <InputRate
              label='?????????? ????????????????'
              required
              size='sm'
              isLabelRequired
              type='number'
              {...register('yourDetails.rate')}
            />
            <Label>????</Label>
            <InputPeriod
              label=''
              required
              size='sm'
              type='number'
              {...register('yourDetails.period')}
            />
            <PeriodTime
              items={itemsSelect}
              noOptionsMessage='???????????????? ???? ??????????????'
              size='sm'
              placeholder=''
              value={periodTime}
              onChange={(e) => setPeriodTime(e as Option2)}
            />
          </FormLineShort>
          <FormLine>
            <Checkbox
              label='???????????????? ??????????????????????????????'
              size='sm'
              checked={notVersioned}
              onChange={(e) => setNotVersioned(!notVersioned)}
            />
          </FormLine>
          {notVersioned && (
            <FormLine>
              <StyledInput
                label='???????? ?????????????? ????????????'
                required
                size='sm'
                isLabelRequired
                {...register('yourDetails.versionLocationKey')}
              />
              <VersionSelect
                label='???????????? ???????????????? ????????????'
                items={itemsSelectVersion}
                noOptionsMessage='???????????????? ???? ??????????????'
                size='sm'
                placeholder=''
                value={versionLocation}
                onChange={(e) => setVersionLocation(e as Option2)}
              />
            </FormLine>
          )}
        </FormSection>
        <FormSection>
          <FormLine>
            <h6>??????????????????????</h6>
          </FormLine>
          <FormLineShort>
            <FullSelect
              disabled
              items={[]}
              defaultValue={defaultAuthentification}
              size='sm'
            />
          </FormLineShort>
          {!edit ? (
            <FormLine>
              <StyledInput
                label='??????????'
                required
                size='sm'
                isLabelRequired
                {...register('yourDetails.login')}
              />
              <WrapperColumn>
                <InputPassword
                  label='????????????'
                  size='sm'
                  isLabelRequired
                  required
                  isAutoSized
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </WrapperColumn>
            </FormLine>
          ) : (
            <>
              <FormLine>
                <Checkbox
                  label='?????????????? ?????????? ?? ????????????'
                  size='sm'
                  checked={notAuth}
                  onChange={(e) => setNotAuth(!notAuth)}
                />
              </FormLine>
              <FormLine>
                {notAuth && (
                  <>
                    <StyledInput
                      label='?????????? ??????????'
                      size='sm'
                      {...register('yourDetails.login')}
                    />
                    <WrapperColumn>
                      <InputPassword
                        label='?????????? ????????????'
                        size='sm'
                        isAutoSized
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </WrapperColumn>
                  </>
                )}
              </FormLine>
            </>
          )}
        </FormSection>
        {!edit && (
          <LastFormSection>
            <FormLine>
              <h6>???????????? ???? ??????????????????</h6>
            </FormLine>
            <FormLineShort>
              <VersionNameInput
                label='????????????????'
                required
                size='sm'
                isLabelRequired
                info='???????????? ???? ??????????????????'
                infoPlacement='top'
                infoSize='sm'
                {...register('yourDetails.versionName')}
              />
              <StyledDatePicker
                label='????????????????'
                shouldOpenOnFocus
                shouldSubmitOnBlur
                size='sm'
                onChange={(e: any) => setExpiresDate(e.$d as string)}
              />
            </FormLineShort>
            <LabelField>????????????????????????</LabelField>
            <InputFile setError={setError} setJsonContent={setJsonContent} />
          </LastFormSection>
        )}
        <StyledButtonGroup type='primary'>
          <Button
            text={!edit ? '??????????????' : '??????????????????'}
            buttonType='submit'
            loading={loading}
            disabled={loading || !!error}
          />
          <Button text='????????????????' buttonType='reset' disabled={loading} />
        </StyledButtonGroup>
      </form>
    )
  }
)
