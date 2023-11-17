import { FC, ChangeEvent, useState } from 'react'
import Container from '../../../Library/main.library/UI-Kit/Container'
import Typography from '../../../Library/main.library/UI-Kit/Typography'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import RadioGroup from '../../../Library/main.library/UI-Kit/RadioGroup'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Switch from '../../../Library/main.library/UI-Kit/Switch'

const EditProfilePage: FC = () => {

  const [value, setValue] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    setValue(event.target.value)
  }

  console.log('State', value)

  return (
    <section className='flex-auto'>
      <Container>
        <div className='mb-6'>
          <Typography variant='title1' component='h1'>
            Edit profile
          </Typography>
        </div>
        <form
          action="#"
          className='flex-auto grid grid-cols-12 grid-rows-[1fr_min-content]'
        >
          {/*    Main    */}
          <div className='col-span-8 px-6'>
            <label className='grid grid-cols-[8rem_1fr] mb-6'>
              <span
                className=''
              >
                Full name
              </span>
              <TextField />
            </label>

            <label className='grid grid-cols-[8rem_1fr] mb-6'>
              <span className=''>Login</span>
              <p>valentine@gmail.com</p>
            </label>

            <label className='grid grid-cols-[8rem_1fr]'>
              <span className=''>About Me</span>
              <TextField />
            </label>

          </div>
          <aside className='col-span-4 px-6'>
            <div>
              <Switch />
            </div>
            <RadioGroup
              name='test'
              onChange={handleChange}
              value={value}
            >
              <RadioGroup.Radio label='User' value='user' />
              <RadioGroup.Radio label='Administrator' value='administrator' checked />
            </RadioGroup>
          </aside>
          <div className='col-span-full flex justify-end gap-6 p-6'>
            <Button variant='ghost'>Cancel</Button>
            <Button>
              Save change
            </Button>
          </div>
        </form>
      </Container>
    </section>
  )
}

export default EditProfilePage