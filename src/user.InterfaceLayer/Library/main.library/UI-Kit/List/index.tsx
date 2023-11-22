import { FC } from 'react'
import { TypeProps } from './type'
import Item from './components/Item'
import cn from 'classnames'

const List: FC<TypeProps> = ({ children, className }) => {
  return (
    <ul
      className={cn('flex', className)}
    >
      { children }
    </ul>
  )
}

export default Object.assign(List, {
  Item
})