import { FC, ReactNode } from 'react'

import * as ST from '../styled'

type IProps = {
  children: ReactNode
}

const ModalActions: FC<IProps> = ({ children }) => {
  return (
    <ST.ModalActions>
      { children }
    </ST.ModalActions>
  )
}

export default ModalActions