import { FC } from 'react'
import { TypeProps } from './type'
import Image from '../Image'

const name = 'Арина Полякова'

const Avatar: FC<TypeProps> = (props) => {

  var {
    picture
  } = props

  var nameArr = name.split(" ")
  console.log(nameArr[0][0])

  return (
    <>
      {picture
        ? <div className='flex rounded-s-full invisible w-6 h-6'>
            <Image
              src={picture}
              width='24'
              height='24'
            />
          </div>
        : <div>
            JP
          </div>}
    </>
  )
}

export default Avatar