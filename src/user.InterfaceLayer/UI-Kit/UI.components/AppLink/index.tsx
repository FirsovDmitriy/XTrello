import { FC } from 'react'
import { IProps } from './type'

import * as ST from './styled'

const AppLink: FC<IProps> = ({ children, to }) => (
  <ST.AppLink to={to}>
    { children }
  </ST.AppLink>
)

export default AppLink