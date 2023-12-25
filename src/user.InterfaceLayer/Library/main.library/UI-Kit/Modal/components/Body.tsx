import { FC, ReactNode } from 'react'

type TypeProps = { children: ReactNode }

const Body: FC<TypeProps> = ({ children }) => {
  return (
    <main className='p-4'>
      { children }
    </main>
  )
}

export default Body