import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const Typography: FC<TypeProps> = (props) => {
  const {
    variant,
    color,
    component: Component = 'p',
    children,
    className
  } = props

  let styles: string = ''

  switch(variant) {
    case 'title1':
      styles = 'font-semibold text-[2.5rem]'
      break
    case 'title2':
      styles = 'font-semibold text-[1.5rem]'
      break
    case 'body1':
      styles = ''
      break
    case 'body2':
      styles = 'text-sm'
  }

  return (
    <Component className={cn('', styles, className)}>
      { children }
    </Component>
  )
}

export default Typography