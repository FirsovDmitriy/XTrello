import { FC, forwardRef } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'
import Icon from './Icon'

const TextField: FC<TypeProps> = forwardRef(function TextField(props, ref) {
  var {
    className,
    isError,
    prependIcon,
    appendIcon,
    ...restProps
  } = props

  console.log('ref', ref)

  return (
    <div className={cn('relative w-full h-[2.525rem] ', className)}>
      <div
        className={cn("flex items-center w-full h-full rounded border gap-2 px-3 focus-within:outline outline-2 outline-offset-2 transition-colors", isError ? 'border-errorColor outline-errorColor' : 'border-primaryColor outline-primaryColor')}
      >
        <Icon element={prependIcon} />

        <input
          className="w-full h-full focus-visible:outline-0 bg-transparent"
          ref={ref}
          { ...restProps }
        />

        <Icon element={appendIcon} />
      </div>
    </div>
  )
})

export default TextField
