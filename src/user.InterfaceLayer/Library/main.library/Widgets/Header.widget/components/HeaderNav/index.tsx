import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import RoutesPath from '../../../../../../router/routesPath'

let links = [
  {
    text: 'Workspaces',
    path: '#',
  },
  {
    text: 'Проекты',
    path: '/',
  },
  {
    text: 'Agile доски',
    path: RoutesPath.BOARD,
  },
  {
    text: 'Пользователи',
    path: '#',
  },
]

const HeaderNav: FC = () => {
  return (
    <nav className="flex gap-6">
      {links.map(({ text, path }) => (
        <NavLink
          to={path}
          className="font-semibold text-primaryColor transition-all hover:text-[#786efe] hover:underline"
          key={text}
        >
          { text }
        </NavLink>
      ))}
    </nav>
  )
}

export default HeaderNav
