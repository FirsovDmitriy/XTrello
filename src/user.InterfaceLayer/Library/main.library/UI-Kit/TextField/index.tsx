import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const TextField: FC<TypeProps> = (props) => {
  const {
    onChange,
    value,
    disabled,
    className,
    isError,
    errorText,
    prependIcon,
    appendIcon,
    ...restProps
  } = props

  return (
    <div className={cn('relative w-full h-[2.525rem] ', className)}>
      <div
        className={cn("flex items-center w-full h-full rounded border px-3 focus-within:outline outline-2 outline-offset-2 outline-primaryColor transition-colors", isError ? 'border-errorColor' : 'border-primaryColor')}
      >
        {prependIcon
        ? <span className="flex mr-2">
            { prependIcon }
          </span>
        : null}

        <input
          className="w-full h-full focus-visible:outline-0 bg-transparent"
          value={value}
          onChange={onChange}
          autoComplete='off'
          { ...restProps }
        />

        <span
          className={cn("absolute top-full left-0 text-sm text-errorColor transition-opacity", isError ? 'opacity-100' : 'opacity-0')}
        >
          { errorText }
        </span>

        {appendIcon
          ? <span className="flex ml-2">
              { appendIcon }
            </span>
          : null}
      </div>
    </div>
  )
}

export default TextField
