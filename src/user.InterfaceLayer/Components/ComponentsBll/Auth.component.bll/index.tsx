import { FC, useState } from 'react'
import AuthForm from '../../../Library/main.library/Widgets/AuthForm.widget'
import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form'

type FormValues = {
  email: string
  password?: string
}

const AuthComponentBll: FC = () => {
  var {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  })

  var handleSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Submit', data)
  }

  return (
    <AuthForm onSubmit={handleSubmit} register={ register } errors={errors} />
  )
}

export default AuthComponentBll