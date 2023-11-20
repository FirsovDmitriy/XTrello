import { FC, ReactNode } from 'react'
import cn from 'classnames'

type TypeProps = {
  children: ReactNode
  show: boolean
  anchorOrigin?: 'left' | 'right'
  className?: string
}

const Menu: FC<TypeProps> = (props) => {
  const {
    children,
    show,
    anchorOrigin = 'right',
    className
  } = props
  
  const visible = show ? 'opacity-100 visible' : 'opacity-0 invisible'
  let horizontalPositioning: string = ''

  switch(anchorOrigin) {
    case 'left':
      horizontalPositioning = 'left-0'
      break
    case 'right':
      horizontalPositioning = 'right-0'
  }

  return (
    <div
      className={
        cn('absolute top-full shadow-2xl transition-opacity bg-body-color z-10', visible, horizontalPositioning, className)
      }
    >
      { children }
    </div>
  )
}

export default Menu