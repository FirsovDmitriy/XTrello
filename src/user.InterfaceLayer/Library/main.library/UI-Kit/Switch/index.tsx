import { FC } from 'react'
import { TypeProps } from './type'
import styled from './styled.module.scss'
import cn from 'classnames'

const Switch: FC<TypeProps> = ({ checked, disabled, ...props }) => {
  return (
    <label
      className='inline-flex'
      role='switch'
      { ...props }
    >
      <input
        className='opacity-0 appearance-none absolute'
        disabled={disabled}
        type='checkbox'
        checked={checked}
      />
      <div
        className={cn('relative w-12 h-6 rounded-xl cursor-pointer', styled.SwitchTrack)}
      >
        <span
          className={cn('absolute top-1/2 -translate-y-2/4 w-5 h-5 rounded-full')}
        />
      </div>
    </label>
  )
}

export default Switch