export type TypeProps = {
  onChange: (value: string | string[]) => void // TODO:
  value: string | string[]
  options: Option[]
  multiple?: boolean
  placeholder?: string
}

export type Option = {
  label: string
  value: string
  selected?: boolean
  disabled?: boolean
}