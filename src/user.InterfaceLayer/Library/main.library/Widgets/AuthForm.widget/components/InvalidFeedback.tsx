import { FC } from 'react'

interface IError {
  id: string
  $invalid: boolean
  $text: string
}

type TypeProps = {
  errors: IError[]
}

const InvalidFeedback: FC<TypeProps> = ({ errors }) => {
  return (
    <span className='absolute top-full left-0 text-sm font-semibold text-errorColor'>
      {errors.map(({ id, $text }) => (
        <span key={id}>
          { $text }
        </span>
      ))}
    </span>
  )
}

export default InvalidFeedback