import { FC } from 'react'
import AuthForm from '../../../Library/main.library/Widgets/AuthForm.widget'

const Login: FC = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <AuthForm />
    </div>
  )
}

export default Login