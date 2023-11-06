import { ChangeEvent, ReactNode } from "react";
import { InputType } from "./enum";

export type TypeProps = {
  value: string
  placeholder: string
  type?: InputType
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  isError?: boolean
  Icon?: Icon
  disabled?: boolean
  errorText?: string
  onFocus?: () => void
}

export interface Icon {
  prepend?: ReactNode | undefined,
  append?: ReactNode | undefined
}
