import { FC, ReactNode } from 'react'
import cn from 'classnames'

type TypeProps = {
  children: ReactNode
  show: boolean
  anchorOrigin?: 'left' | 'right'
}

const Menu: FC<TypeProps> = ({ children, show, anchorOrigin = 'right' }) => {
  
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
        cn('absolute top-full shadow-xl transition-opacity bg-primary-backColor z-10', visible, horizontalPositioning)
      }
    >
      { children }
    </div>
  )
}

export default Menu