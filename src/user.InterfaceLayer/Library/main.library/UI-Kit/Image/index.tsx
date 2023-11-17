import { FC } from 'react'
import { TypeProps } from './type'
import cn from 'classnames'

const Image: FC<TypeProps> = (props) => {
  const {
    className,
    src,
    width,
    height,
    ...restProps
  } = props

  return (
    <img
      className={cn('object-cover flex', className)}
      src={src}
      width={width}
      height={height}
      { ...restProps }
    />
  )
}

export default Image
