import { FC } from 'react'
import { PropsType } from './type'
import mockAvatar from './mock.png'

import * as SC from './styled'

const Avatar: FC<PropsType> = ({ img }) => {
  return (
    <SC.Avatar>
      <SC.AvatarPicture
        width='24'
        height='24'
        alt='Avatar'
        src={ img ? img : mockAvatar }
      />
    </SC.Avatar>
  )
}

export default Avatar