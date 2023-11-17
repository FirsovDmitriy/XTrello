import { Suspense } from "react"
import RoutesPath from "./routesPath"
import MainLayout from "../Layout/Main.layout"
import { HomePage } from "../Pages/Home.page"
import { ProfilePage } from "../Pages/Profile.page";
import { RouteObject } from "react-router-dom";
import CreatePage from "../Pages/Create.page/components/page";
import ErrorRouteElement from "../Components/GeneralComponents/Error/ErrorRouteElement";
import { EditProfilePage } from "../Pages/EditProfile.page";

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
        )
      },
      // {
      //   path: RoutesPath.TASKS,
      //   element: (
      //     <Suspense>
      //       <TasksPage />
      //     </Suspense>
      //   )
      // },
      {
        path: RoutesPath.CREATE_TASK,
        element: (
          <Suspense>
            <CreatePage />
          </Suspense>
        )
      },
      {
        path: RoutesPath.PROFILE,
        element: (
          <Suspense>
            <ProfilePage />
          </Suspense>
        )
      },
      {
        path: RoutesPath.EDIT_PROFILE,
        element: (
          <Suspense>
            <EditProfilePage />
          </Suspense>
        )
      }
    ]
  }
]

export default AppRouter