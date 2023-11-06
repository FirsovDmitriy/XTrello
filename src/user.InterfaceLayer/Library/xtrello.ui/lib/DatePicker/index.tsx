import { ChangeEvent, FC, useRef, useState } from 'react'
import TextField from '../TextField'
import Calendar from './Calendar'

import * as SC from './styled'
import useClickOutside from '../../hooks/useClickOutside'

const DatePicker: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const ref = useRef(null)

  const handleClose = () => setOpen(false)

  useClickOutside(ref, handleClose)

  return (
    <SC.DatePickerWrapper ref={ref}>
      <TextField
        placeholder='Select date'
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        onClick={() => setOpen(!open)}


        Icon={{
          append: value.length > 0 ? (
            <SC.ClearButton onClick={() => setValue('')}>
              <SC.IconCleaner>
                <i className='icon Clear-icon'></i>
              </SC.IconCleaner>
              <SC.Indicator>
                <i className='icon Calendar-icon'></i>
              </SC.Indicator>
            </SC.ClearButton>
          ) : (
            <i className='icon Calendar-icon'></i>
          )
        }}
      />

      <Calendar open={open} selectDate={setValue} />

    </SC.DatePickerWrapper>
  )
}

export default DatePicker