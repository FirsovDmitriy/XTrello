import { FC } from 'react'
import { TypeProps } from './type'

import * as ST from './styled'

const AppLink: FC<TypeProps> = ({ children, to }) => (
  <ST.AppLink to={to}>
    { children }
  </ST.AppLink>
)

export default AppLink