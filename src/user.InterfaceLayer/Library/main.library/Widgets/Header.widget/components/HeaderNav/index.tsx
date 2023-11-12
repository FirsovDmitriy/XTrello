import { FC } from 'react'
import { NavLink } from 'react-router-dom'

let links = [
  {
    text: 'Проекты',
    path: '#',
  },
  {
    text: 'Agile доски',
    path: '#',
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
          className="text-white transition-colors hover:text-[#786efe]"
          key={text}
        >
          { text }
        </NavLink>
      ))}
    </nav>
  )
}

export default HeaderNav
