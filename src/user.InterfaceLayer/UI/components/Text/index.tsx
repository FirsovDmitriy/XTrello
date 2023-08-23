import { FC } from 'react'
import * as ST from './styled'
import { IProps } from './type'

const Text: FC<IProps> = ({ children }) => {
  return (
    <ST.Text>
      { children }
    </ST.Text>
  )
}

export default Text