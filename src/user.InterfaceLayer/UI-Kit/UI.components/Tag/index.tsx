import { FC } from 'react'
import { PropsType } from './type'

import * as SC from './styled'

const Tag: FC<PropsType> = ({ children, bgColor }) => (
  <SC.Tag $bgColor={bgColor}> { children } </SC.Tag>
)

export default Tag