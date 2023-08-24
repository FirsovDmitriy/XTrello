import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import App from '../../App'

const MainLayout: FC = () => (
  <React.Fragment>
    <App />
    <main className="page__content">
      <Outlet />
    </main>
  </React.Fragment>
)

export default MainLayout