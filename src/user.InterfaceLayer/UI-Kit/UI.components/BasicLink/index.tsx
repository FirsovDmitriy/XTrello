import { FC } from 'react'
import { IProps } from './type'

import * as ST from './styled'

const BasicLink: FC<IProps> = ({ children, to }) => (
  <ST.BasicLink to={to}>
    { children }
  </ST.BasicLink>
)

export default BasicLink