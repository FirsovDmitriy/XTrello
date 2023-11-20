import { FC, useContext } from 'react'
import { TypeProps } from './type'
import { Context } from '../../Context'
import styled from './styled.module.scss'
import cn from 'classnames'

const Radio: FC<TypeProps> = (props) => {

  const {
    label,
    ...restProps
  } = props

  const {name, onChange} = useContext(Context)

  return (
    <label className='flex items-center w-full justify-between'>

      { label }

      <input
        className={cn('appearance-none absolute top-[-9999px] left-[-9999px]', styled.Input)}
        type='radio'
        name={name}
        { ...restProps }
        onChange={onChange}
      />

      <div
        className={cn('grid w-6 h-6 rounded-full cursor-pointer border-2 border-solid border-primaryColor', styled.RadioControl)}
      >
        <span
          className='place-self-center w-[0.625rem] h-[0.625rem] rounded-full transition-opacity bg-primaryColor'
        />
      </div>

    </label>
  )
}

export default Radio
