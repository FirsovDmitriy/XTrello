import { Suspense } from 'react'
import RoutesPath from './routesPath'
import MainLayout from '../Layout/Main.layout'
import { HomePage } from '../Pages/Home.page'
import { ProfilePage } from '../Pages/Profile.page'
import { RouteObject } from 'react-router-dom'
import CreatePage from '../Pages/Create.page/components/page'
import ErrorRouteElement from '../Components/GeneralComponents/Error/ErrorRouteElement'
import { EditProfilePage } from '../Pages/EditProfile.page'
import { BoardPage } from '../Pages/Board.page'
import AuthLayout from '../Layout/Auth.layout'
import { SignupPage } from '../Pages/Signup.page'
import { LoginPage } from '../Pages/login.page'

const AppRouter: RouteObject[] = [
  {
    path: RoutesPath.HOME,
    element: <MainLayout />,
    errorElement: <ErrorRouteElement />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: RoutesPath.BOARD,
        element: (
          <Suspense>
            <BoardPage />
          </Suspense>
        ),
      },
      {
        path: RoutesPath.CREATE_TASK,
        element: (
          <Suspense>
            <CreatePage />
          </Suspense>
        ),
      },
      {
        path: RoutesPath.PROFILE,
        element: (
          <Suspense>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: RoutesPath.EDIT_PROFILE,
        element: (
          <Suspense>
            <EditProfilePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: RoutesPath.HOME,
    element: <AuthLayout />,
    children: [
      {
        path: RoutesPath.SIGNUP,
        element: (
          <Suspense>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: RoutesPath.LOGIN,
        element: (
          <Suspense>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]

export default AppRouter
