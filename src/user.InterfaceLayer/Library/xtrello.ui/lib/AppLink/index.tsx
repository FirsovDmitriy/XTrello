import { FC } from 'react'
import { TypeProps } from './type'

import * as SC from './styled'

const AppLink: FC<TypeProps> = ({ children, to }) => (
  <SC.AppLink to={to}>
    { children }
  </SC.AppLink>
)

export default AppLink