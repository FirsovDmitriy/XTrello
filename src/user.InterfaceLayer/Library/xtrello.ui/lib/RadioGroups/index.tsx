import { FC } from 'react'
import RadioButton from './components/RadioButton'
import { TypeProps } from './type'

import * as SC from './styled'

const RadioGroups: FC<TypeProps> = ({ name, children }) => {
  return (
    <SC.RadioGroups
      role='radiogroup'
    >
      { children }
    </SC.RadioGroups>
  )
}

export default Object.assign(RadioGroups, {
  Radio: RadioButton
})
