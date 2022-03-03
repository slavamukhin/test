import React, { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import {
  Button,
  ButtonGroup,
  Col,
  DetailsList,
  EmptyBlock,
  Link,
  Preloader,
  Row,
  Status,
  Table,
} from '@inno/ui-kit'
import {
  DocsOutline,
  PlusOutline,
  RedactOutline,
  PowerOutline,
  TrashOutline,
} from '@inno/icons-kit'
import { apiStore } from '../../store'
import { ERoutesPath } from '../../routes'
import { Card } from '../../layout/Card'
import { PageHeader } from '../../layout/PageHeader'
import { VersionObject } from '../../interfaces'
import { downloadObjectAsJson } from '../../utils'

export const ApiView = observer(() => {
  const { getApi, api, pending } = apiStore
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getApi(params.id!)
  }, [params.id])

  const handleBackButtonClick = useCallback(() => {
    navigate(ERoutesPath.API_LIST_PAGE)
  }, [navigate])

  if (pending) {
    return <Preloader />
  }

  return (
    <>
      <PageHeader
        title={api.name}
        backLabel='Список API'
        onBack={handleBackButtonClick}
        status={<Status type={api.internal ? `off` : 'active'} />}
        actions={
          <ButtonGroup limit={3} type='ghost'>
            <Button icon={<RedactOutline />}>Редактировать</Button>
            <Button icon={<PowerOutline />}>Выключить</Button>
          </ButtonGroup>
        }
      />

      <Card title='Основные параметры'>
        <Row>
          <Col col='6'>
            <DetailsList
              items={[
                {
                  items: [
                    {
                      label: 'Идентификатор',
                      value: api.apiId,
                    },
                    {
                      label: 'Listen Path',
                      value: api.listenPath,
                    },
                    {
                      label: 'Target URL',
                      value: api.targetUrl,
                    },
                    {
                      label: 'Лимит запросов',
                      value: '5000 за 30 день',
                    },
                    {
                      label: 'Авторизация',
                      value: 'Basic authentification',
                    },
                  ],
                },
              ]}
            />
          </Col>
          <Col col='6'>
            <DetailsList
              items={[
                {
                  items: [
                    {
                      label: 'Версионирование',
                      value: api.versionData?.notVersioned
                        ? `Включено`
                        : 'Выключено',
                    },
                    {
                      label: 'Способ передачи версии',
                      value: api.versionData?.versionLocation,
                    },
                    {
                      label: 'Ключ запроса версии',
                      value: api.versionData?.versionLocationKey,
                    },
                  ],
                },
              ]}
            />
          </Col>
        </Row>
      </Card>

      <Card
        title='Версии'
        actions={
          <Button type='ghost' icon={<PlusOutline />}>
            Добавить
          </Button>
        }
      >
        {api.versionData?.versions.length ? (
          <Table<VersionObject>
            columns={[
              {
                dataIndex: 'versionName',
                title: 'Название',
              },
              {
                dataIndex: 'expires',
                title: 'Истекает',
                render: (value) =>
                  value ? new Date(value).toLocaleDateString() : 'Не ограничен',
              },
              {
                dataIndex: '',
                title: 'Спецификация',
                render: (_, record) => (
                  <Link
                    href='#'
                    size='md'
                    onClick={() =>
                      downloadObjectAsJson(
                        record.apiSpecification,
                        record.versionName
                      )
                    }
                  >
                    Скачать JSON файл
                  </Link>
                ),
              },
            ]}
            actions={[
              {
                icon: <RedactOutline />,
                onClick: () => {},
              },
              {
                icon: <TrashOutline />,
                onClick: () => {},
              },
            ]}
            data={toJS(api.versionData.versions)}
            rowKey='versionName'
          />
        ) : (
          <EmptyBlock
            text='Нет ни одной версии'
            icon={<DocsOutline />}
            action={{
              text: 'Добавить версию',
              onClick: () => {},
            }}
          />
        )}
      </Card>
    </>
  )
})
