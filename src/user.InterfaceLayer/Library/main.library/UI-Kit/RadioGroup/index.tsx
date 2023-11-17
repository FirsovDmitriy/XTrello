import { FC } from 'react'
import RadioButton from './components/RadioButton'
import { TypeProps } from './type'
import { Context } from './Context'

const RadioGroup: FC<TypeProps> = (props) => {
  const {
    name,
    children,
    value,
    onChange
  } = props

  return (
    <div
      className='flex flex-col gap-4'
      role='radiogroup'
    >
      <Context.Provider value={{name, onChange, value}}>
        { children }
      </Context.Provider>
    </div>
  )
}

export default Object.assign(RadioGroup, {
  Radio: RadioButton
})
