import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { TypeProps } from './type'

function getContainer(container: TypeProps['container']) {
  return typeof container === 'function' ? container() : container
}

const Portal: FC<TypeProps> = ({ children, container }) => {

  const [mountNode, setMountNode] = useState<ReturnType<typeof getContainer>>(null)

  useEffect(() => {
    setMountNode(getContainer(container) || document.body)
  }, [container])

  return (
    <React.Fragment>
      { mountNode ? createPortal(children, mountNode) : mountNode }
    </React.Fragment>
  )
}

export default Portal