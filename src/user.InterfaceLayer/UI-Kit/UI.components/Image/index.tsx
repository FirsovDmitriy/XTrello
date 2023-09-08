import { FC } from 'react'
import { IProps } from './type'
import * as ST from './styled'

const Image: FC<IProps> = ({ src, ...props }) => (
  <ST.Image
    src={src}
    { ...props }
  />
)

export default Image