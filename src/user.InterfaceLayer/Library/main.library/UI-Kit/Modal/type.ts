import { CSSProperties, ReactNode } from "react"

export type TypeProps = {
  onClose: () => void
  show: boolean
  children: ReactNode
  styles: CSSProperties
}