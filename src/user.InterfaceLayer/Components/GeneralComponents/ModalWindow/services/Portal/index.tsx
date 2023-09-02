import { FC } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: JSX.Element
}

const Portal: FC<PortalProps> = ({ children }) => {
  const root = document.createElement('div')
  root.id = 'modal-root'
  document.body.append(root)

  return createPortal(children, root)
}

export default Portal