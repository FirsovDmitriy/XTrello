import { FC } from 'react'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Button from '../../../Library/main.library/UI-Kit/Buttons'

const CommentForm: FC = () => {
  return (
    <form className='flex gap-2 w-full'>
      <TextField
        placeholder='Комментировать...'
      />
      <Button
        variant='square'
      >
        <i className='icon Send-icon'></i>
      </Button>
    </form>
  )
}

export default CommentForm