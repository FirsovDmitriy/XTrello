import { FC, ReactNode } from 'react'

type TypeProps = { children: ReactNode }

const Footer: FC<TypeProps> = ({ children }) => {
  return (
    <footer className='flex justify-end p-4 gap-2 border-t border-neutral-400'>
      { children }
    </footer>
  )
}

export default Footer