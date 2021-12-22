interface IMenu {
  id: number
  title: string
  to: string
  activeClassName: string
}

export const menu: IMenu[] = [
  {
    id: 0,
    title: 'API',
    to: '/api',
    activeClassName: 'active',
  },
  {
    id: 1,
    title: 'Ключи',
    to: '/key',
    activeClassName: 'active',
  },
]