import { ChangeEvent, ReactNode } from "react";

export type TypeProps = {
  value?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  isError?: boolean
  prependIcon?: ReactNode
  appendIcon?: ReactNode
  disabled?: boolean
  errorText?: string
  onFocus?: () => void
  variant?: 'underlined' | 'outlined'
  className?: string
  type?: string | 'text'
}
