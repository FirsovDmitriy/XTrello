import { FC } from 'react'
import { TypeProps } from './type'
import Image from '../Image'

const Avatar: FC<TypeProps> = (props) => {

  var {
    picture,
    fullname
  } = props

  var arrayOfWorks = fullname?.split(" ")
  var firstSymbol = arrayOfWorks?.[0][0] ?? 'x'
  var secondSymbol = arrayOfWorks?.[1][0] ?? 'x'

  return (
    <>
      {picture
        ? <div className='flex rounded-s-full overflow-hidden w-8 h-8'>
            <Image
              src={picture}
              width='32'
              height='32'
            />
          </div>
        : <div className='flex justify-center items-center rounded w-10 h-10 overflow-hidden border border-thirdColor'>
            <p className='font-semibold text-sm uppercase'>
              { `${ firstSymbol }.${ secondSymbol }.` }
            </p>
          </div>}
    </>
  )
}

export default Avatar