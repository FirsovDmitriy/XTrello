import { FC } from 'react'
import { TypeSlot } from '../../type'

import * as SC from './styled'
import Typography from '../../../Typography'

const Heading: FC<TypeSlot> = ({ children }) => (
  <SC.Heading>
    <Typography variant='h2'>
      { children }
    </Typography>
  </SC.Heading>
)

export default Heading