import { ChangeEvent, FC, useState } from 'react'
import TextField from '../TextField'
import Calendar from './Calendar'

import * as SC from './styled'

const DatePicker: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <SC.DatePickerWrapper>
      <TextField
        placeholder='Select date'
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        onClick={() => setOpen(!open)}


        Icon={{
          append: <i className='icon Calendar-icon'></i>
        }}
      />

      <Calendar open={open} selectDate={setValue} />

    </SC.DatePickerWrapper>
  )
}

export default DatePicker