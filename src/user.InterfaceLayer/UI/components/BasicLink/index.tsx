import { FC } from 'react'

import * as ST from './styled'
import { IProps } from './type'

const BasicLink: FC<IProps> = ({ children, to }) => (
  <ST.BasicLink to={to}>
    { children }
  </ST.BasicLink>
)

export default BasicLink