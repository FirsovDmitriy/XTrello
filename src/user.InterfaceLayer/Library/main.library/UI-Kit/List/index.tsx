import { FC } from 'react'
import { TypeProps } from './type'
import Item from './components/Item'

const List: FC<TypeProps> = ({ children }) => {
  return (
    <ul className='flex flex-col'>
      { children }
    </ul>
  )
}

export default Object.assign(List, {
  Item
})