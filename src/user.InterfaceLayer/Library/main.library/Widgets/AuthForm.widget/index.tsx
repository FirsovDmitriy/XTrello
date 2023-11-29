import { FC, FormEvent, SyntheticEvent, useEffect, useState } from 'react'
import TextField from '../../UI-Kit/TextField'
import Button from '../../UI-Kit/Buttons'
import Typography from '../../UI-Kit/Typography'
import { useLocation } from 'react-router-dom'
import RoutesPath from '../../../../router/routesPath'
import { validateEmail } from './utils'

interface IUser {
  email: string
  password: string
}

const initialUserData: IUser = {
  email: '',
  password: ''
}

const AuthForm: FC = () => {
  var [user, setUser] = useState<IUser>(initialUserData)
  var [invalidEmail, setInvalidEmail] = useState<boolean>(false)
  var [invalidPassword, setInvalidPassword] = useState<boolean>(false)
  var [validForm, setValidForm] = useState<boolean>(false)
  var location = useLocation()

  var isAuthorized = location.pathname === RoutesPath.LOGIN ? true : false

  var handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    console.log('user', user)
  }

  var checkValidationEmail = () => {
    if(!validateEmail(user.email)) {
      setInvalidEmail(true)
    } else {
      setInvalidEmail(false)
    }
  }

  var checkValidationPassword = () => {
    if(user.password.length <= 8) {
      setInvalidPassword(true)
    } else setInvalidPassword(false)
  }

  var handleBlur = (event: FormEvent<HTMLInputElement>) => {
    switch(event.currentTarget.name) {
      case 'email':
        checkValidationEmail()
        break
      case 'password':
        checkValidationPassword()
        break
    }
  }

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
            onBlur={handleBlur}
            placeholder="Введите ваш адрес электронной почты"
            type='email'
            name='email'
            required
            errorText='Пожалуйста, укажите почту'
            value={user.email}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setUser({
                ...user,
                email: event.currentTarget.value
              })
            }}
            isError={ invalidEmail }
            onFocus={() => setInvalidEmail(false)}
          />
        </label>

        <label htmlFor="#">
          <TextField
            placeholder={
              isAuthorized ? 'Введите пароль' : 'Выберите пароль'
            }
            type='password'
            name='password'
            required
            minLength='8'
            value={user.password}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setUser({
                ...user,
                password: event.currentTarget.value
              })
            }}
            onBlur={handleBlur}
            isError={invalidPassword}
            errorText='Пароль слишком короткий'
            onFocus={() => setInvalidPassword(false)}
          />
        </label>
      </div>

      <div className="p-4">
        <Button
          className="w-full"
          type='submit'
          disabled={!validForm}
        >
          { isAuthorized ? 'Войти' : 'Создать аккаунт' }
        </Button>
      </div>
    </form>
  )
}

export default AuthForm
