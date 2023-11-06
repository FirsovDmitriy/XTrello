import { FC } from 'react'
import dayjs from 'dayjs'
import { IProps } from './type'

import * as SC from './styled'

const MonthCalendar: FC<IProps> = ({ setMonth }) => {

  const months = [...Array(12)].map((_, index) => {
    return dayjs().month(index)
  })
  console.log('Months', months)
  
  return (
    <SC.MonthCalendar>
      {months.map(item => (
        <SC.MonthButton
          $isActive={ item.isSame(new Date(), 'month') }
          onClick={() => setMonth(item)}
        >
          <SC.MonthText>
            { item.format('MMM').slice(0, 3) }
          </SC.MonthText>
        </SC.MonthButton>
      ))}
    </SC.MonthCalendar>
  )
}

export default MonthCalendar