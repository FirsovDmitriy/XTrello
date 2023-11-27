import React from 'react'
import ReactDOM from 'react-dom/client'
import './user.InterfaceLayer/styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppRouter from './user.InterfaceLayer/router'
import { Provider } from 'react-redux'
import { store } from './business.InterfaceLayer/store'

const element = document.getElementById('root') as HTMLElement
const router = createBrowserRouter(AppRouter)

ReactDOM.createRoot(element).render(
  <Provider store={ store }>
    <RouterProvider router={ router } />
  </Provider>,
)
