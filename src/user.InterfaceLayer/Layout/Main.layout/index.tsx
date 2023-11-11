import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { PageContent } from './styled'

const MainLayout: FC = () => {

  return <>
    <PageContent>
      <Outlet />
    </PageContent>
  </>
}

export default MainLayout