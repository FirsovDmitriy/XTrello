import { FC } from 'react'
import { IProps } from './type'

import * as ST from './styled'

const Switch: FC<IProps> = ({ checked, disabled, ...props }) => {
  return (
    <ST.Switch
      role='switch'
      { ...props }
    >
      <ST.SwitchInput
        disabled={disabled}
        type='checkbox'
        checked={checked}
      />
      <ST.SwitchCore></ST.SwitchCore>
    </ST.Switch>
  )
}

export default Switch