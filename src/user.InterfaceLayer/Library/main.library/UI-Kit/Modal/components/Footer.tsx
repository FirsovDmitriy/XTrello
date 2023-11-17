import { FC } from 'react'

type TypeProps = { children: JSX.Element[] }

const Footer: FC<TypeProps> = ({ children }) => {
  return (
    <footer className='flex justify-end p-6 gap-2'>
      { children }
    </footer>
  )
}

export default Footer