import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Library/main.library/Widgets/Header.widget'

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col'>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
