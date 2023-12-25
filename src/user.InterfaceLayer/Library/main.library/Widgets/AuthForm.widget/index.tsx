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

const AuthForm: FC<TypeProps> = ({ onSubmit, register }) => {

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

  var { errors } = useValidation(password.value, {
    required,
    minLength: minLenght(5)
  })

  var { errors: errors2 } = useValidation(value.value, {
    required, email
  })

  console.log('2', errors2)



  var [fieldType, setFieldType] = useState<'password' | 'text'>('password')

  var [validForm, setValidForm] = useState(false)

  var location = useLocation()
  var isAuthorized = location.pathname === RoutesPath.LOGIN ? true : false

  var handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    onSubmit()
  }

  useEffect(() => {
    const isFormValid = value.valid && password.valid
    setValidForm(!isFormValid)
  }, [
    value.value,
    password.value
  ])

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
            onBlur={ () => {setValue({ ...value, $touched: true })}}
            placeholder="Введите ваш адрес электронной почты"
            type='email'
            value={value.value}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setValue({
                ...value,
                value: event.currentTarget.value
              })
            }}
            isError={ Boolean(errors2.length) && value.$touched }
            // aria-invalid={}
          />

          {value.$touched && <InvalidFeedback errors={errors2} />}
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
            onBlur={() => setPassword({ ...password, $touched: true })}
            isError={ Boolean(errors.length) && password.$touched }
            // aria-invalid={}
            appendIcon={
              <ShowPasswordButton fieldType={fieldType} setFieldType={setFieldType} />
            }
          />

          {
            password.$touched && <InvalidFeedback errors={errors} />
          }

        </label>
      </div>

      <div className="p-4">
        <Button
          className="w-full"
          type='submit'
          aria-label="Show password"
          disabled={ validForm }
        >
          { isAuthorized ? 'Войти' : 'Создать аккаунт' }
        </Button>
      </div>
    </form>
  )
}

export default AuthForm
