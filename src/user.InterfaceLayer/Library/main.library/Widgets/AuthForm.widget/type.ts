import { UseFormRegister, SubmitHandler } from "react-hook-form"

export type TypeProps = {
  onSubmit: () => SubmitHandler<FormValues>
  register: UseFormRegister<IFormValues>
}

interface IFormValues {
  email: string
  password: string
}

type FormValues = {
  email: string
  password: string
}