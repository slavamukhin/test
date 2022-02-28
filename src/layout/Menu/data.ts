interface IMenu {
  id: number
  title: string
  to: string
  activeClassName: string
}

export const menu: IMenu[] = [
  {
    id: 0,
    title: 'Список API',
    to: '/ui-api',
    activeClassName: 'active',
  },
  {
    id: 1,
    title: 'Ключи',
    to: '/ui-key',
    activeClassName: 'active',
  },
]
