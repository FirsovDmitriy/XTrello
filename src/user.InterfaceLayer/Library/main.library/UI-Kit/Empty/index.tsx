import { FC } from 'react'
import { TypeProps } from './type'
// import Container from '../Container'

const Empty: FC<TypeProps> = ({ children, text }) => (
  <div className="w-full h-full flex justify-center items-center">
    <div>
      <p className="mb-[0.64rem]">
        { text }
      </p>
      { children }
    </div>
  </div>
)

export default Empty
