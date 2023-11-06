import { Suspense } from "react"
import RoutesPath from "./routesPath"
import MainLayout from "../Layout/Main.layout"
import { HomePage } from "../Pages/Home.page"
import { ProfilePage } from "../Pages/Profile.page";
import { TasksPage } from "../Pages/Tasks.page";

import { RouteObject } from "react-router-dom";
import CreatePage from "../Pages/Create.page/ui/CreatePage";
import ErrorRouteElement from "../Components/GeneralComponents/Error/ErrorRouteElement";

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
      {
        path: RoutesPath.TASKS,
        element: (
          <Suspense>
            <TasksPage />
          </Suspense>
        )
      },
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
      }
    ]
  }
]

export default AppRouter