import { FC } from 'react'
import { TypeProps } from './type'

import * as SC from './styled'

const Container: FC<TypeProps> = ({ children }) => (
  <SC.Container>
    { children }
  </SC.Container>
)

export default Container