import { FC } from 'react'

import * as ST from './styled'
import { IProps } from './type'

const Checkbox: FC<IProps> = ({ checked, disabled }) => {
  return (
    <ST.Checkbox>
      <ST.Input
        type='checkbox'
        checked={checked}
        disabled={disabled}
      />
      <ST.CheckboxCore></ST.CheckboxCore>
    </ST.Checkbox>
  )
}

export default Checkbox