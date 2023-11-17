import { FC, useState } from 'react'
import Image from '../../../Library/main.library/UI-Kit/Image'
import avatarPicture from './user.png'
import Dropdowns from '../../../Library/main.library/UI-Kit/Dropdowns'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import RoutesPath from '../../../router/routesPath'

const Avatar: FC = () => {

  const [show, setShow] = useState<boolean>(false)


  return (
    <div className='relative cursor-pointer group'>
      <Image
        src={ avatarPicture }
        width='300'
        height='300'
      />
      <span
        className={cn(
          'absolute right-5 bottom-5 transition-opacity group-hover:opacity-100',
          show ? 'opacity-100' : 'opacity-0')}
      >
        <Dropdowns
          onClose={() => setShow(false)}
        >
          <Dropdowns.Toggle>
            <Button
              variant='square'
              onClick={() => setShow(!show)}
            >
            <i className='icon MoreVert-icon'></i>
            </Button>
          </Dropdowns.Toggle>
          <Dropdowns.Menu
            show={show}
            className='block w-32'
          >
            <Dropdowns.Item>
              <Link to={RoutesPath.EDIT_PROFILE}>Edit</Link>
            </Dropdowns.Item>
            <Dropdowns.Item>
              <Button variant='text'>Delete</Button>
            </Dropdowns.Item>
          </Dropdowns.Menu>
        </Dropdowns>
      </span>
    </div>
  )
}

export default Avatar