import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const Button: FC<TypeProps> = (props) => {

  const {
    children,
    variant = 'primary',
    prependIcon,
    appendIcon,
    ...restProps
  } = props

  let styles: string = ''

  switch(variant) {
      case 'primary':
        styles = 'bg-primary text-[#1D2125] transition-opacity hover:opacity-60'
        break
      case 'outlined':
        styles = 'text-primary-text transition-colors hover:bg-hovered'
        break
      case 'square':
        styles = 'w-[2.625rem] border border-primary transition-colors hover:bg-primary'
  }

  return (
    <button
      className={cn('flex justify-center items-center gap-2 font-semibold h-[2.625rem] px-4 rounded', styles)}
      { ...restProps }
    >
      {prependIcon ? (
        <span> {prependIcon} </span>
      ) : null}
      <span className='grid'>
        { children }
      </span>
      {appendIcon ? (
        <span> {appendIcon} </span>
      ) : null}
    </button>
  )
}

export default Button