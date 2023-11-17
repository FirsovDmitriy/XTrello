import { FC } from 'react'
import cn from 'classnames'
import { TypeProps } from './type'

const Backdrop: FC<TypeProps> = ({ show }) => (
  <div
  className={cn(
      'fixed top-0 left-0 w-full h-full z-40 bg-black/50',
      show ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
    )}
  />
)

export default Backdrop