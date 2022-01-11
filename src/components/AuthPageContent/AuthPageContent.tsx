import React, { FC, useEffect, useState } from 'react'
import { InputPassword, Input, Button, useNotifications } from '@inno/ui-kit'
import { observer } from 'mobx-react-lite'
import { authStore } from '../../store'
import { ContentWrapper, InputWrapper, ButtonWrapper } from './StyledComponed'

export const AuthPageContent: FC = observer(() => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { getToken, loading, authError } = authStore
  const { toast } = useNotifications()

  useEffect(() => {
    if (authError.message) {
      toast({
        duration: 3,
        status: 'critical',
        text: authError.message,
      })
    }
  }, [authError])

  const authClick = (): void => {
    getToken({ login, password })
  }
  return (
    <>
      <ContentWrapper>
        <InputWrapper>
          <Input
            label='Логин'
            placeholder='Введите ваш логин'
            onChange={(e) => setLogin(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputPassword
            label='Пароль'
            placeholder='Введите пароль'
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            size='sm'
            text='Войти'
            type='primary'
            loading={loading}
            onClick={authClick}
            disabled={loading}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </>
  )
})
