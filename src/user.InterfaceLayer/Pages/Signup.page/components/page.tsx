import { FC } from 'react'
// import AuthForm from '../../../Library/main.library/Widgets/AuthForm.widget'
import AuthComponentBll from '../../../Components/ComponentsBll/Auth.component.bll'

const Signup: FC = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      {/* <AuthForm /> */}
      <AuthComponentBll />
    </div>
  )
}

export default Signup