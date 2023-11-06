import { FC } from 'react'
import Typography from '../Typography'
import { PropsType } from './type'

import * as SC from './styled'

const Tag: FC<PropsType> = ({ children, bgColor }) => (
  <SC.Tag $bgColor={bgColor}>
    <Typography $fontSize='14px'>
      { children }
    </Typography>
  </SC.Tag>
)

export default Tag