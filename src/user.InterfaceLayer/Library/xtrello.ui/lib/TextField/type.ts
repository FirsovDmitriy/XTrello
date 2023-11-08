import { ChangeEvent, ReactNode } from "react";
import { InputType } from "./enum";
import { GlobalStylesProps } from "../../src/GlobalStylesProps";

export type TypeProps = {
  value: string
  placeholder?: string
  type?: InputType
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  isError?: boolean
  prependIcon?: ReactNode
  appendIcon?: ReactNode
  disabled?: boolean
  errorText?: string
  onFocus?: () => void
  $variant?: 'underlined' | 'outlined'
  $sx?: GlobalStylesProps
}
