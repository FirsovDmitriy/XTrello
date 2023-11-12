import { FC } from 'react'
import { TypeProps } from './type'
// import Container from '../Container'

const Empty: FC<TypeProps> = ({ children, text }) => (
  <div className='h-full p-6'>
    <div className='w-full h-full rounded border-dark-border border flex justify-center items-center'>
      <span>
        <p className='mb-[0.64rem]'> { text } </p>
        { children }
      </span>
    </div>
  </div>
)

export default Empty