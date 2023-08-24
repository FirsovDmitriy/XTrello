import { Suspense } from "react"
import RoutesPath from "./routesPath"
import MainLayout from "../Layout/Main.layout"
import { HomePage } from "../Pages/Home.page"

import { RouteObject } from "react-router-dom";

const AppRouter: RouteObject[] = [
  {
    path: RoutesPath.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        )
      }
    ]
  }
]

export default AppRouter