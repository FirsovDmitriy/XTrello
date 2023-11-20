import { FC } from 'react'
import { TypeProps } from './type'
import styled from './styled.module.scss'
import cn from 'classnames'

const Switch: FC<TypeProps> = (props) => {

  const {
    disabled,
    checked,
    label,
    ...restProps
  } = props

  return (
    <label
      className='flex w-full justify-between'
      role='switch'
      { ...restProps }
    >
      { label }
      <input
        className={cn('appearance-none absolute top-[-9999px] left-[-9999px]', styled.Input)}
        disabled={disabled}
        type='checkbox'
        checked={checked}
      />
      <div
        className={cn('relative w-12 h-6 rounded-xl cursor-pointer border border-secondaryColor', styled.SwitchTrack)}
      >
        <span
          className={cn('absolute top-1/2 -translate-y-2/4 left-[.1rem] w-5 h-5 rounded-full transition-all')}
        />
      </div>
    </label>
  )
}

export default Switch