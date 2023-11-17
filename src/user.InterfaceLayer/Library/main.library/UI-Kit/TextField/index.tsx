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
    <div className={cn('h-[2.525rem] ', className)}>
      <div
        className={cn("flex items-center w-full h-full rounded border-primaryColor border px-3 focus-within:outline outline-2 outline-offset-2 outline-primaryColor")}
      >
        {prependIcon ? <span className="flex mr-2">{ prependIcon }</span> : null}

        <input
          className="w-full h-full focus-visible:outline-0 bg-transparent"
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...restProps}
        />

        {isError ? (
          <span className="absolute top-full left-0 text-error">
            {errorText}
          </span>
        ) : null}

        {appendIcon ? <span className="flex ml-2">{ appendIcon }</span> : null}
      </div>
    </div>
  )
}

export default TextField
