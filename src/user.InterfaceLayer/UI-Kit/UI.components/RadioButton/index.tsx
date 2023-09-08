import { FC } from 'react'

import * as ST from './styled'

const RadioButton: FC = () => {
  return (
    <ST.RadioButton>
      <ST.Input type='radio' name='test' />
      <ST.Core />
    </ST.RadioButton>
  )
}

export default RadioButton