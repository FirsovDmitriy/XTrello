import { ReactNode } from "react"

export type TypeProps = {
  container?: Element | (() => Element) | null
  children?: ReactNode
}