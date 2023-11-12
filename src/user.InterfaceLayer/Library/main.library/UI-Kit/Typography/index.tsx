import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const Typography: FC<TypeProps> = (props) => {
  const {
    variant,
    color,
    component: Component = 'p',
    children
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
  }

  return (
    <Component className={cn('', styles)}>
      { children }
    </Component>
  )
}

export default Typography