import { lazy } from "react";

export const TaskCardPageAsync = lazy(
  () => import('./page')
)