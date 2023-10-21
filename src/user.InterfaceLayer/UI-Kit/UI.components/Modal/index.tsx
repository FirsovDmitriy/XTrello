/* eslint-disable react-refresh/only-export-components */
import { FC, useEffect, MouseEvent } from 'react'
import { IProps, ISlot } from './type'
import Portal from '../../../Components/GeneralComponents/ModalWindow/services/Portal'

import * as SC from './styled'

const ModalHeading = (props: ISlot) => (
  <SC.Heading>
    { props.children }
  </SC.Heading>
)

const ModalBody = (props: ISlot) => (
  <SC.Body>
    { props.children }
  </SC.Body>
)

const ModalFooter = (props: ISlot) => (
  <SC.Footer>
    { props.children }
  </SC.Footer>
)

const Modal: FC<IProps> = ({ onClose, children, open }) => {

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
  Heading: ModalHeading,
  Body: ModalBody,
  Footer: ModalFooter
})
