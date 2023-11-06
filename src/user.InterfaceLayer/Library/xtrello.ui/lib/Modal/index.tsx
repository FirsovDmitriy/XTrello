/* eslint-disable react-refresh/only-export-components */
import { FC, useEffect, MouseEvent } from 'react'
import { TypeProps } from './type'
import Heading from './components/Heading'
import Body from './components/Body'
import Footer from './components/Footer'
// import Portal from '../../../Components/GeneralComponents/ModalWindow/services/Portal'

import * as SC from './styled'

const Modal: FC<TypeProps> = ({ onClose, children, open }) => {

  const scrollbarSize = window.innerWidth - document.documentElement.clientWidth

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${ scrollbarSize }px`
    } else {
      document.body.style.overflow = 'visible'
      document.body.style.paddingRight = '0px'
    }
  }, [open])

  return (
    <Portal>
      <SC.Modal
        $open={open}
        role='dialog'
      >
        <SC.ModalBackdrop
          onClick={ onClose }
          $open={open}
        >
          <SC.ModalContent
            onClick={ (event: MouseEvent<HTMLDivElement>) => event.stopPropagation() }
            $open={open}
          >
            { children }
          </SC.ModalContent>
        </SC.ModalBackdrop>
      </SC.Modal>
    </Portal>
  )
}

export default Object.assign(Modal, {
  Heading,
  Body,
  Footer
})
