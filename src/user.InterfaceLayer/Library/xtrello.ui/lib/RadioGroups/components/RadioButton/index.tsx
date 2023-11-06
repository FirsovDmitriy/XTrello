import { FC } from 'react'
import { TypeProps } from './type'

import * as SC from './styled'

const RadioButton: FC<TypeProps> = ({ label, value, checked, name }) => {
  return (
    <SC.RadioButton>
      { label }
      <SC.Input
        type='radio'
        value={value}
        checked={checked}
      />
      <SC.Core />
    </SC.RadioButton>
  )
}

export default RadioButton
