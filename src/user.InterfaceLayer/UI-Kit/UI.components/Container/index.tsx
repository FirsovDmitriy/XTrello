import { FC } from 'react'
import { IProps } from './type'

import * as ST from './styled'

const Container: FC<IProps> = ({ children }) => (
  <ST.Container>
    { children }
  </ST.Container>
)

export default Container