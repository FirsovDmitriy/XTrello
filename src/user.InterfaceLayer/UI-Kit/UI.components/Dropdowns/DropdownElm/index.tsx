import { FC, ReactNode, useContext } from 'react'
import { Context } from '../Context'

import * as ST from './styled'

export interface IProps {
  children?: ReactNode | string
}

const DropdownElm: FC<IProps> = ({ children }) => {
  const { onClose } = useContext(Context)

  return (
    <ST.DropdownElm
      onClick={ () => onClose?.() }
      role='menuitem'
    >
      { children }
    </ST.DropdownElm>
  )
}

export default DropdownElm