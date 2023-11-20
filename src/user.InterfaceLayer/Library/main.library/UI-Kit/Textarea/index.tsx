import { ChangeEvent, FC, useRef } from 'react'
import { PropsType } from './type'
import { MAX_HEIGHT } from './constants'

import * as SC from './styled' 

const Textarea: FC<PropsType> = ({ placeholder, onChange, value, ...props }) => {
  const refTextArea = useRef<HTMLTextAreaElement>(null)

  function syncHeight() {
    const textArea = refTextArea.current
    if(!textArea) return

    const height = textArea.scrollHeight
    textArea.style.height = 'auto'
    textArea.style.height = `${ Math.min(height, MAX_HEIGHT) }px`

    if(textArea.scrollHeight > MAX_HEIGHT) {
      textArea.style.overflowY = 'scroll'
    } else textArea.style.overflow = 'hidden'
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
    syncHeight()
  }

  return (
    <SC.Textarea
      placeholder={placeholder}
      ref={refTextArea}
      onChange={handleChange}
      value={value}
      { ...props }
    >
    </SC.Textarea>
  )
}

export default Textarea
