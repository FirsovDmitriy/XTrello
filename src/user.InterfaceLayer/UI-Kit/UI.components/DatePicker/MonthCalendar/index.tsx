import { FC } from 'react'
import dayjs from 'dayjs'

import * as SC from './styled'

const MonthCalendar: FC = () => {
  return (
    <SC.MonthCalendar>
      {[...Array(12)].map((_, index) => (
        <SC.MonthButton>
          { dayjs().month(index).format('MMMM') }
        </SC.MonthButton>
      ))}
    </SC.MonthCalendar>
  )
}

export default MonthCalendar