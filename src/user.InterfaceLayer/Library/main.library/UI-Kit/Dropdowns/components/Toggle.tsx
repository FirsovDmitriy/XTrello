import { FC, ReactNode } from 'react'

type TypeProps = {
  children: ReactNode
}

const Toggle: FC<TypeProps> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default Toggle