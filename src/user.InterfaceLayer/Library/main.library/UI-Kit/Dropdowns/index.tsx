import { FC, useRef } from 'react'
import Toggle from './components/Toggle'
import Menu from './components/Menu'
import Item from './components/Item'
import { TypeProps } from './type'
import useClickAwayListener from '../../../../hooks/useClickAwayListener'
import cn from 'classnames'

const Dropdowns: FC<TypeProps> = ({ children, onClose, className }) => {

  const ref = useRef<HTMLDivElement>(null)
  useClickAwayListener(ref, onClose)

  return (
    <div ref={ref} className={cn('relative', className)}>
      { children }
    </div>
  )
}

export default Object.assign(Dropdowns, {
  Toggle,
  Menu,
  Item
})
