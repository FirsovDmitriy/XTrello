import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const Button: FC<TypeProps> = (props) => {

  const {
    children,
    variant = 'primary',
    prependIcon,
    appendIcon,
    className,
    ...restProps
  } = props

  let styles: string = ''

  switch(variant) {
      case 'primary':
        styles = 'h-[2.625rem] px-4 bg-primaryColor text-[#1D2125] transition-opacity hover:opacity-60'
        break
      case 'ghost':
        styles = 'h-[2.625rem] px-4 text-primary-text transition-colors hover:bg-hoveredColor'
        break
      case 'square':
        styles = 'h-[2.625rem] w-[2.625rem] border border-primaryColor bg-body-color transition-colors hover:bg-primaryColor'
        break
      default:
        styles = ''
  }

  return (
    <button
      className={cn('flex justify-center items-center gap-2 font-semibold rounded disabled:bg-disabled-bg/[0.2] disabled:text-disabled-font/[0.2]', styles, className)}
      { ...restProps }
    >
      {prependIcon ? (
        <span> {prependIcon} </span>
      ) : null}
      { children }
      {appendIcon ? (
        <span> {appendIcon} </span>
      ) : null}
    </button>
  )
}

export default Button