import { FC, useRef } from 'react'
import cn from 'classnames'
import { TypeProps } from './type'
import { CSSTransition } from 'react-transition-group'

const AnimationStyles = {
  enter: 'opacity-0',
  enterActive: 'opacity-1 transition-opacity',
  exit: 'opacity-1',
  exitActive: 'opacity-0 transition-opacity',
}

const Backdrop: FC<TypeProps> = ({ show }) => {

  var ref = useRef<HTMLDivElement>(null)

  return (
    <CSSTransition
      nodeRef={ref} in={show} timeout={400}
      classNames={AnimationStyles}
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={ref}
        className={cn('fixed top-0 left-0 w-full h-full z-40 bg-black/50 transition-opacity')}
      />
    </CSSTransition>
  )
}

export default Backdrop
