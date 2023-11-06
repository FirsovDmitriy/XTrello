import { FC } from 'react'
import { TypeSlot } from '../../type'

import * as SC from './styled'

const Footer: FC<TypeSlot> = ({ children }) => (
  <SC.Footer> { children } </SC.Footer>
)

export default Footer