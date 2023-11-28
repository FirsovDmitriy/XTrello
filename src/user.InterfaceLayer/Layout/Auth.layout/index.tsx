import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: FC = () => {
  return (
    <main className='flex-auto flex'>
      <Outlet />
    </main>
  )
}

export default AuthLayout