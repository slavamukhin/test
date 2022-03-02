import React, { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {
  Button,
  ButtonGroup,
  DetailsList,
  EmptyBlock,
  Preloader,
  Status,
  Table,
} from '@inno/ui-kit'
import {
  DocsOutline,
  PlusOutline,
  PowerOutline,
  RedactOutline,
} from '@inno/icons-kit'
import { keyStore } from '../../store'
import { ERoutesPath } from '../../routes'
import { Card } from '../../layout/Card'
import { PageHeader } from '../../layout/PageHeader'
import { AccessRightsObject } from '../../interfaces'

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
        title={key.name}
        backLabel='Список ключей'
        onBack={handleBackButtonClick}
        status={<Status type={key.active ? 'active' : 'off'} />}
        actions={
          <ButtonGroup limit={3} type='ghost'>
            <Button icon={<RedactOutline />}>Редактировать</Button>
            <Button icon={<PowerOutline />}>Выключить</Button>
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
        actions={
          <Button type='ghost' icon={<PlusOutline />}>
            Добавить
          </Button>
        }
      >
        {key.accessRights && key.accessRights.length ? (
          <Table<AccessRightsObject>
            columns={[
              {
                dataIndex: 'apiId',
                title: 'Идентификатор',
              },
              {
                title: 'Версии',
                render: (_, record) =>
                  record.versions &&
                  !!record.versions.length &&
                  record.versions.join(', '),
              },
              {
                title: 'Endpoints',
                render: (_, record) =>
                  record.allowedUrls &&
                  !!record.allowedUrls.length &&
                  record.allowedUrls[0].methods?.join(', '),
              },
              {
                title: 'URL',
                render: (_, record) =>
                  record.allowedUrls &&
                  !!record.allowedUrls.length &&
                  record.allowedUrls[0].url,
              },
              {
                dataIndex: 'limits',
                title: 'Лимит запросов',
              },
              {
                dataIndex: 'quotas',
                title: 'Квота запросов',
              },
            ]}
            data={key.accessRights}
            rowKey='apiId'
            actions={[
              {
                icon: <RedactOutline />,
                onClick: () => {},
              },
              {
                icon: <PowerOutline />,
                onClick: () => {},
              },
            ]}
          />
        ) : (
          <EmptyBlock
            text='Нет доступных API'
            icon={<DocsOutline />}
            action={{
              text: 'Добавить',
              onClick: () => {},
            }}
          />
        )}
      </Card>
    </>
  )
})
