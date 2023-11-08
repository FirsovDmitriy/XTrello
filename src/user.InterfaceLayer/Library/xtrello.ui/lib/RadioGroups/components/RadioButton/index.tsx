import { FC, useContext } from 'react'
import { TypeProps } from './type'
import { Context } from '../../Context'

import * as SC from './styled'

const RadioButton: FC<TypeProps> = (props) => {

  const {
    label,
    ...restProps
  } = props

  const name = useContext(Context)

  return (
    <SC.RadioButton>
      { label }
      <SC.RadioButtonInput
        type='radio'
        name={name}
        { ...restProps }
      />
      <SC.RadioButtonControl />
    </SC.RadioButton>
  )
}

export default RadioButton
