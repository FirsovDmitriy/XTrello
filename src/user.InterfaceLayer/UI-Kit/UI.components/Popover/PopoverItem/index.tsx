import { FC, ReactNode, useContext } from 'react'
import { Context } from '../Context'

import * as ST from './styled'

export interface IProps {
  children?: ReactNode | string
}

const PopoverItem: FC<IProps> = ({ children }) => {
  const onClose = useContext(Context)

  return (
    <ST.PopoverItem onClick={onClose}>
      { children }
    </ST.PopoverItem>
  )
}

export default PopoverItem