import { FC, ForwardedRef, forwardRef } from 'react'
import { Ref, TypeProps } from './type'
import Item from './components/Item'
import cn from 'classnames'

const List: FC<TypeProps> = forwardRef((props, ref: ForwardedRef<HTMLUListElement>) => {

  const {
    children,
    className
  } = props

  return (
    <ul
      ref={ref}
      className={cn('flex', className)}
    >
      { children }
    </ul>
  )
})

export default Object.assign(List, {
  Item
})