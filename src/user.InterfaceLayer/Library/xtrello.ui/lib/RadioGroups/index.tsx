import { FC } from 'react'
import RadioButton from './components/RadioButton'
import { TypeProps } from './type'
import { Context } from './Context'

import * as SC from './styled'

const RadioGroups: FC<TypeProps> = ({ name, children }) => {
  return (
    <SC.RadioGroups
      role='radiogroup'
    >
      <Context.Provider value={name}>
        { children }
      </Context.Provider>
    </SC.RadioGroups>
  )
}

export default Object.assign(RadioGroups, {
  Radio: RadioButton
})
