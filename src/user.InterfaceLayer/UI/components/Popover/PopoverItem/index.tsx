import { FC, useContext } from 'react'

import * as ST from './styled'
import { Context } from '../Context'

export interface IProps {
  children?: JSX.Element | string
}

const PopoverItem: FC<IProps> = ({ children }) => {
  const onClose = useContext(Context)
  const handleClose = () => onClose() //TODO:

  return (
    <ST.PopoverItem onClick={handleClose}>
      { children }
    </ST.PopoverItem>
  )
}

export default PopoverItem