export type TypeProps = {
  onSubmit: () => void
  register: (name: string, validation: IValidation) => void
}

interface IValidation {
  required?: boolean
}