import { FC, ReactNode } from 'react'

type TypeProps = { children: ReactNode }

const Body: FC<TypeProps> = ({ children }) => {
  return (
    <main className='p-6'>
      { children }
    </main>
  )
}

export default Body