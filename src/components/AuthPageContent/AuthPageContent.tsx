import React, { FC, useEffect, useState } from 'react'
import { InputPassword, Input, Button, useNotifications } from '@inno/ui-kit'
import { observer } from 'mobx-react-lite'
import { authStore } from '../../store'
import { ContentWrapper, InputWrapper, Title } from './StyledComponed'

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
        <Title>Вход</Title>
        <InputWrapper>
          <Input
            placeholder='Логин'
            onChange={(e) => setLogin(e.target.value)}
            size='lg'
          />
        </InputWrapper>
        <InputWrapper>
          <InputPassword
            placeholder='Пароль'
            onChange={(e) => setPassword(e.target.value)}
            size='lg'
          />
        </InputWrapper>
        <Button
          size='lg'
          text='Войти'
          type='primary'
          loading={loading}
          onClick={authClick}
          disabled={loading}
          isBlock
        />
      </ContentWrapper>
    </>
  )
})
