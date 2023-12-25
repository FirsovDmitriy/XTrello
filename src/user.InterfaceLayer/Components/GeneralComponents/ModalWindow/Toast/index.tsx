import { FC, useEffect, useState } from 'react'
import { TypeProps } from './type'
import Portal from '../services/Portal'

const Toast: FC<TypeProps> = (props) => {
  var { message, onClose, autoHideDuration = 6000, show } = props

  var [invisible, setInvisible] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setInvisible(true)
    }, autoHideDuration)
  }, [])

  if (invisible) return null

  return (
    <Portal>
      <div
        className="fixed bottom-12 left-12 rounded w-60 h-12 flex items-center px-2 bg-green-600"
      >
        <p className="font-semibold">
          { message }
        </p>
      </div>
    </Portal>
  )
}

export default Toast
