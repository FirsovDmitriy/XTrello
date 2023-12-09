import { FC, useEffect } from 'react'
import cn from 'classnames'
import styled from './styled.module.scss'

const Preloader: FC = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = 'visible'
    }
  })

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full grid bg-black/40">
      <svg
        className="relative place-self-center fill-none"
        xmlns="http://www.w3.org/2000/svg"
        width={'60'}
        height={'60'}
        viewBox="0 0 60 60"
      >
        <circle
          className={cn(styled.Circle)}
          stroke='#111'
          r="20"
          cx="30"
          cy="30"
        />
      </svg>
    </div>
  )
}

export default Preloader
