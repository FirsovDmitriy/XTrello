import { FC, ReactNode } from 'react'
import cn from 'classnames'

type TypeProps = {
  children: ReactNode
  className: string
}

const Item: FC<TypeProps> = ({ children, className }) => {
  return (
    <li className={cn(className)}>
      { children }
    </li>
  )
}

export default Item