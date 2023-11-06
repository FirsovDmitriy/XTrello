import { ReactNode } from "react"

export type TypeProps = {
  children?: ReactNode
  onClose: () => void
  open: boolean
  anchorEl: HTMLButtonElement
}
