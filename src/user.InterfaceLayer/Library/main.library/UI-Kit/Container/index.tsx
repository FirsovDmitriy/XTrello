import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const Container: FC<TypeProps> = ({ children, className }) => (
  <div
    className={cn('box-content max-w-[120rem] mx-auto p-6', className)}
  >
    { children }
  </div>
)

export default Container