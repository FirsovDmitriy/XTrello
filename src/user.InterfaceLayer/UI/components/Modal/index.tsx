import { FC, useEffect } from 'react'
import { IProps } from './type'

import * as ST from './styled'
import Portal from '../../../Components/GeneralComponents/ModalWindow/services/Portal'

const Modal: FC<IProps> = ({ title, size, children, onClose, isShow }) => {

  useEffect(() => {
    if(isShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isShow])

  return (
    <Portal>
      <ST.Modal $isShow={isShow}>
        <ST.Content $isShow={isShow} size={size}>
          <ST.Heading>
            { title }
          </ST.Heading>
          { children }
        </ST.Content>
        <ST.Overlay
          onClick={ onClose }
          $isShow={isShow}
        />
      </ST.Modal>
    </Portal>
  )
}

export default Modal