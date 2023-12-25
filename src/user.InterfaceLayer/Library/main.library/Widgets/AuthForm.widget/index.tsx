import { FC, FormEvent, SyntheticEvent, useEffect, useState } from 'react'
import TextField from '../../UI-Kit/TextField'
import Button from '../../UI-Kit/Buttons'
import Typography from '../../UI-Kit/Typography'
import { useLocation } from 'react-router-dom'
import RoutesPath from '../../../../router/routesPath'
import useValidation from './useValidation'
import required from './validators/withText/required'
import minLenght from './validators/withText/minLength'
import email from './validators/withText/email'
import ShowPasswordButton from './components/ShowPasswordButton'
import InvalidFeedback from './components/InvalidFeedback'
import { TypeProps } from './type'
import { EMAIL_REGULAR_EXPRESSION } from './constant'

const AuthForm: FC<TypeProps> = ({ onSubmit, register, errors }) => {

  const [value, setValue] = useState({
    value: '',
    valid: false,
    $touched: false,
  })

  const [password, setPassword] = useState({
    value: '',
    valid: false,
    $touched: false,
  })

  // var { errors } = useValidation(password.value, {
  //   required,
  //   minLength: minLenght(5)
  // })

  var { errors: errors2 } = useValidation(value.value, {
    required, email
  })



  var [fieldType, setFieldType] = useState<'password' | 'text'>('password')

  var location = useLocation()
  var isAuthorized = location.pathname === RoutesPath.LOGIN ? true : false

  var handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    onSubmit()
    console.log('text', value.value)
  }

  console.log('Erros', errors)

  return (
    <form
      className="flex flex-col w-96 bg-body-color shadow-2xl"
      action="#"
      onSubmit={handleSubmit}
    >
      <div className="flex p-4">
        <Typography
          className="text-center"
          variant="title2"
          component="h2"
        >
          {isAuthorized ? 'Авторизоваться' : 'Регистрация'}
        </Typography>
      </div>

      <div className="flex flex-col gap-9 p-4">
        <label className='relative'>
          <TextField
            { ...register('email', {
              required: "Email Address is required",
              pattern: {
                value: EMAIL_REGULAR_EXPRESSION,
                message: 'Invalid email address'
              }
            }) }
            placeholder="Введите ваш адрес электронной почты"
            type='email'
            value={value.value}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setValue({
                ...value,
                value: event.currentTarget.value
              })
            }}
            // aria-invalid={}
          />
          {errors?.email && <InvalidFeedback text={errors?.email?.message} />}
        </label>

        <label className='relative'>
          <TextField
            placeholder={isAuthorized ? 'Введите пароль' : 'Выберите пароль'}
            type={ fieldType }
            value={password.value}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setPassword({
                ...password,
                value: event.currentTarget.value
              })
            }}
            appendIcon={
              <ShowPasswordButton fieldType={fieldType} setFieldType={setFieldType} />
            }
          />
        </label>
      </div>

      <div className="p-4">
        <Button
          className="w-full"
          type='submit'
          aria-label="Show password"
        >
          { isAuthorized ? 'Войти' : 'Создать аккаунт' }
        </Button>
      </div>
    </form>
  )
}

export default AuthForm
