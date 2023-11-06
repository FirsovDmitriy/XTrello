import { FC } from 'react'
import { TypeSlot } from '../../type'

import * as SC from './styled'

const Heading: FC<TypeSlot> = ({ children }) => (
  <SC.Heading> { children } </SC.Heading>
)

export default Heading