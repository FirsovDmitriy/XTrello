import { FC } from 'react'

import * as SC from './styled'

const RadioGroups: FC = () => {
  return (
    <SC.RadioGroups>
      <SC.Input type='radio' name='test' />
      <SC.Core />
    </SC.RadioGroups>
  )
}

export default RadioGroups