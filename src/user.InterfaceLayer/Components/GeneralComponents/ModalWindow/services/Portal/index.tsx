import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

const element = document.querySelector('#portal') as HTMLElement

type PortalProps = {
  children: ReactNode
}

const Portal: FC<PortalProps> = ({ children }) => {

  return createPortal(children, element)
}

export default Portal