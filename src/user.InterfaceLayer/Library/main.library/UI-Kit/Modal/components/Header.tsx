import { FC } from 'react'
import Typography from '../../Typography'

type TypeProps = { children: string }

const Header: FC<TypeProps> = ({ children }) => {
  return (
    <header className="p-4">
      <Typography component="h2" variant="title2">
        { children }
      </Typography>
    </header>
  )
}

export default Header
