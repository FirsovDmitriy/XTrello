import { FC } from 'react'
import TextField from '../../UI-Kit/TextField'
import Button from '../../UI-Kit/Buttons'
import Typography from '../../UI-Kit/Typography'
import { useLocation } from 'react-router-dom'
import RoutesPath from '../../../../router/routesPath'

const AuthForm: FC = () => {

  var location = useLocation()

  var isAuthorized = location.pathname === RoutesPath.LOGIN ? true : false

  var handleSubmit = () => {}

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
            placeholder="Введите ваш адрес электронной почты"
            type='email'
          />
        </label>

        <label htmlFor="#">
          <TextField
            placeholder={
              isAuthorized ? 'Введите пароль' : 'Выберите пароль'
            }
            type='password'
          />
        </label>
      </div>

      <div className="p-4">
        <Button
          className="w-full"
          type='submit'
          disabled
        >
          { isAuthorized ? 'Войти' : 'Создать аккаунт' }
        </Button>
      </div>
    </form>
  )
}

export default AuthForm
