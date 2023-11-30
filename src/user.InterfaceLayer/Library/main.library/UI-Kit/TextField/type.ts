import { FormEvent, ReactNode } from "react";

export type TypeProps = {
  value?: string
  placeholder?: string
  onChange?: (paramert: FormEvent<HTMLInputElement>) => void
  isError?: boolean
  prependIcon?: ReactNode
  appendIcon?: ReactNode
  disabled?: boolean
  errorText?: string
  onFocus?: () => void
  variant?: 'underlined' | 'outlined'
  className?: string
  type?: string | 'text'
  required?: boolean
  minLength?: string
  maxLength?: string
  min?: string
  max?: string
  name?: string
  pattern?: string
  onBlur?: (parametr: FormEvent<HTMLInputElement>) => void
  inputMode?: 'search' | 'url' | 'tel' | 'decimal' | 'numeric' | 'text' | 'none'
}
