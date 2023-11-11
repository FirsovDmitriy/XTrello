import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () => import('./page')
)