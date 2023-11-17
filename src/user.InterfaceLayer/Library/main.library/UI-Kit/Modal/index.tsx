import { FC, MouseEventHandler, useRef } from 'react'
import Portal from '../../../../Components/GeneralComponents/ModalWindow/services/Portal'
import { TypeProps } from './type'
import cn from 'classnames'
import Backdrop from '../Backdrop'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { CSSTransition } from 'react-transition-group'

const Modal: FC<TypeProps> = (props) => {
  const { children, onClose, show, styles } = props

  const ref = useRef<HTMLDivElement>(null)

  let visibile: string = ''
  show
    ? (visibile = 'opacity-100 visible pointer-events-auto')
    : (visibile = 'opacity-0 invisible pointer-events-none')

  const handleStopEvent: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
  }

  return (
    <Portal>
      <Backdrop show={show} />

      {/* Modal */}
      <CSSTransition
        in={show}
        nodeRef={ref}
        timeout={300}
        classNames='modal'
        unmountOnExit
      >
        <div
          className={cn('fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center',)}
          onClick={onClose}
          ref={ref}
        >
          <section
            onClick={handleStopEvent}
            className={cn('rounded shadow-lg bg-primary-backColor')}
            role="dialog"
            style={styles}
          >
            {children}
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
