import { FC, MouseEventHandler, useRef } from 'react'
import Portal from '../../../../Components/GeneralComponents/ModalWindow/services/Portal'
import { TypeProps } from './type'
import cn from 'classnames'
import Backdrop from '../Backdrop'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { CSSTransition } from 'react-transition-group'
import styled from './styled.module.scss'

const Animation = {
  enter: styled.modal_Enter,
  enterActive: styled.modal_EnterActive,
  exit: styled.modal_Exit,
  exitActive: styled.modal_ExitActive
}

const Modal: FC<TypeProps> = (props) => {
  const { children, onClose, show, styles } = props
  var ref = useRef<HTMLDivElement>(null)

  const handleStopEvent: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
  }

  return (
    <Portal>
      <Backdrop show={show} />

      <CSSTransition
        nodeRef={ref} in={show} timeout={400} classNames={Animation}
        mountOnEnter
        unmountOnExit
      >
        <div
          ref={ref}
          className={cn('fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center')}
          onClick={onClose}
        >
          <section
            className={cn('rounded shadow-lg bg-body-color')}
            onClick={handleStopEvent}
            role="dialog"
            style={styles}
          >
            { children }
          </section>
        </div>
      </CSSTransition>
    </Portal>
  )
}

export default Object.assign(Modal, {
  Header,
  Body,
  Footer,
})
