import React from 'react'
import ReactDOM from 'react-dom/client'
import './user.InterfaceLayer/styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppRouter from './user.InterfaceLayer/router'

const element = document.getElementById('root') as HTMLElement
const router = createBrowserRouter(AppRouter)

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
