import React, { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useKeycloak } from '@react-keycloak/web'
import {
  Button,
  ButtonGroup,
  DetailsList,
  Preloader,
  Status,
} from '@inno/ui-kit'
import { PlusOutline, PowerOutline, RedactOutline } from '@inno/icons-kit'
import { keyStore } from '../../store'
import { ERoutesPath } from '../../routes'
import { Card } from '../../layout/Card'
import { PageHeader } from '../../layout/PageHeader'

export const KeyView = observer(() => {
  const { getKey, key, pending } = keyStore
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getKey(params.id!)
  }, [params.id])

  const handleBackButtonClick = useCallback(() => {
    navigate(ERoutesPath.KEY_LIST_PAGE)
  }, [navigate])

  if (pending) {
    return <Preloader />
  }

  return (
    <>
      <PageHeader
        title='Космический департамент'
        backLabel='Список ключей'
        onBack={handleBackButtonClick}
        status={<Status type={key.active ? 'active' : 'off'} />}
        actions={
          <ButtonGroup limit={3} type='ghost'>
            <Button text='Редактировать' icon={<RedactOutline />} />
            <Button text='Выключить' icon={<PowerOutline />} />
          </ButtonGroup>
        }
      />
      <Card title='Основные параметры'>
        <DetailsList
          items={[
            {
              items: [
                {
                  label: 'Идентификатор',
                  value: key.keyId,
                },
                {
                  label: 'Авторизация',
                  value: 'Basic authentification',
                },
              ],
            },
          ]}
        />
      </Card>
      <Card
        title='Доступные API'
        actions={<Button type='ghost' text='Добавить' icon={<PlusOutline />} />}
      ></Card>
    </>
  )
})
