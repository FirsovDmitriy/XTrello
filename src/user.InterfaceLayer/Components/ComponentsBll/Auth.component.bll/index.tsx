import { FC, useState } from 'react'
import AuthForm from '../../../Library/main.library/Widgets/AuthForm.widget'
import { userAPI } from '../../../../business.InterfaceLayer/store/redux/api/user.api'
import Preloader from '../../../Library/main.library/UI-Kit/Preloader'

const AuthComponentBll: FC = () => {

  var [user, setUser] = useState({
    email: '',
    password: ''
  })

  var { data, error, isLoading } = userAPI.useRegisterQuery({email: 'anna@mongodb.io', password: 'fei7G5fwHK4yo'})

  if(isLoading) return <Preloader />
  console.log('Data', data)

  return (
    <AuthForm user={user} setUser={setUser} />
  )
}

export default AuthComponentBll