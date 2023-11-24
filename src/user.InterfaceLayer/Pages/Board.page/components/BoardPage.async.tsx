import { lazy } from 'react'

export const BoardPageAsync = lazy(
  () => import('./page')
)