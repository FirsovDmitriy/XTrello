import { FC, useEffect, useRef } from 'react'
import { IProps } from './type'
import { Context } from './Context'

import * as SC from './styled'

const Dropdowns: FC<IProps> = ({ children, onClose, open, anchorEl, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  function setPositioningStyles() {
    if (!(anchorEl instanceof Element)) return

    const element = ref.current
    const coordY = anchorEl.getBoundingClientRect().bottom
    const coordX = anchorEl.getBoundingClientRect().x

    if(element) {
      element.style.top = `${ coordY }px`
      element.style.left = `${ coordX }px`
    }
  }

  useEffect(() => {
    if(open) {
      setPositioningStyles()
    }
  })

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      const btn = anchorEl

      if(btn && !btn.contains(event.target as Node)) {
        if(ref.current && !ref.current.contains(event.target as Node)) {
          onClose()
        }
      }
    }
    
    document.addEventListener('click', onClickOutside, {capture: true})

    return () => {
      document.removeEventListener('click', onClickOutside)
    }

  }, [open])

  return (
    <SC.Dropdowns
      role="menu"
      ref={ref}
      $isShow={open}
      { ...props }
    >
      <SC.DropdownContent>
        <Context.Provider value={{ onClose }}>
          { children }
        </Context.Provider>
      </SC.DropdownContent>
    </SC.Dropdowns>
  )
}

export default Dropdowns
