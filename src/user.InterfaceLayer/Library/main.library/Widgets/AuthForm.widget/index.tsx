import { FC, FormEvent, SyntheticEvent, useEffect, useReducer, useState } from 'react'
import TextField from '../../UI-Kit/TextField'
import Button from '../../UI-Kit/Buttons'
import Typography from '../../UI-Kit/Typography'
import { useLocation } from 'react-router-dom'
import RoutesPath from '../../../../router/routesPath'
import HideIcon from '../../assets/icons/HideIcon'
import { validateEmail } from './utils'
import ShowIcon from '../../assets/icons/ShowIcon'

const AuthForm: FC = () => {
  var [email, setEmail] = useState<string>('')
  var [validEmail, setValidEmail] = useState<boolean>(false)
  var [emailBlur, setEmailBlur] = useState(false)

  var [password, setPassword] = useState<string>('')
  var [validPassword, setValidPassword] = useState(false)
  var [passwordBlur, setPasswordBlur] = useState(false)
  var [fieldType, setFieldType] = useState<'password' | 'text'>('password')

  var [validForm, setValidForm] = useState(false)

  var location = useLocation()
  var isAuthorized = location.pathname === RoutesPath.LOGIN ? true : false

  var handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    console.log('Data', email, password)
  }

  var passwordCheck = () => {
    var result = password.length > 8
    setValidPassword(result)
    setPasswordBlur(true)
  }

  useEffect(() => {
    if(validEmail && validPassword) {
      setValidForm(true)
    }
    else setValidForm(false)
  }, [validEmail, validPassword])

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
        <label htmlFor="#">
          <TextField
            onBlur={ () => {
              setValidEmail(validateEmail(email))
              setEmailBlur(true)
            }}
            placeholder="Введите ваш адрес электронной почты"
            type='email'
            errorText='Пожалуйста, укажите почту'
            value={email}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setEmail(event.currentTarget.value)
            }}
            isError={ !validEmail && emailBlur }
            onFocus={ () => setEmailBlur(false) }
            aria-invalid={validEmail}
          />
        </label>

        <label htmlFor="#">
          <TextField
            placeholder={
              isAuthorized ? 'Введите пароль' : 'Выберите пароль'
            }
            type={ fieldType }
            value={password}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setPassword(event.currentTarget.value)
            }}
            onBlur={passwordCheck}
            isError={ !validPassword && passwordBlur }
            errorText='Пароль слишком короткий'
            onFocus={() => setPasswordBlur(false)}
            appendIcon={
              <button
                onClick={() => {
                  fieldType === 'password'
                    ? setFieldType('text') : setFieldType('password')
                }}
                className='grid'
              >
                {fieldType === 'password'
                  ? <HideIcon />
                  : <ShowIcon />}
              </button>
            }
          />
        </label>
      </div>

      <div className="p-4">
        <Button
          className="w-full"
          type='submit'
          disabled={ !validForm }
        >
          { isAuthorized ? 'Войти' : 'Создать аккаунт' }
        </Button>
      </div>
    </form>
  )
}

export default AuthForm
