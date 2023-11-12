import { FC, ReactNode } from 'react'

type TypeProps = {
  children: ReactNode | string
}

const Item: FC<TypeProps> = ({ children }) => {
  return (
    <div className='px-4 py-2 cursor-pointer transition-colors hover:bg-hovered'>
      { children }
    </div>
  )
}

export default Item