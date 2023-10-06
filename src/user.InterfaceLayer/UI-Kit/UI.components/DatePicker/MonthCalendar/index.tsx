import { FC } from 'react'
import dayjs from 'dayjs'

import * as SC from './styled'
import { TypeProps } from './type'

const MonthCalendar: FC<TypeProps> = ({ setMonth }) => {

  const months = [...Array(12)].map((_, index) => {
    return dayjs().month(index)
  })
  console.log('Months', months)
  

  return (
    <SC.MonthCalendar>
      {months.map(item => (
        <SC.MonthButton
          $isActive={ item.isSame() }
          onClick={() => setMonth(item)}
        >
          { item.format('MMMM') }
        </SC.MonthButton>
      ))}
    </SC.MonthCalendar>
  )
}

export default MonthCalendar