import { FC } from 'react'
import { TypeProps } from './type'

import * as SC from './styled'

const Switch: FC<TypeProps> = ({ checked, disabled, ...props }) => {
  return (
    <SC.Switch
      role='switch'
      { ...props }
    >
      <SC.SwitchInput
        disabled={disabled}
        type='checkbox'
        checked={checked}
      />
      <SC.SwitchTrack />
    </SC.Switch>
  )
}

export default Switch