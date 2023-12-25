import { FC } from 'react'

type TypeProps = {
  text?: string
}

const InvalidFeedback: FC<TypeProps> = (props) => {
  return (
    <span className='absolute top-full left-0 text-sm font-semibold text-errorColor'>
      { props.text }
    </span>
  )
}

export default InvalidFeedback