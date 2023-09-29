import { FC, useState } from 'react'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)

import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
import 'dayjs/locale/ru';

import * as SC from './styled'

dayjs.locale('ru')

const month = dayjs().startOf('month').format('MMMM');
const total = 42

const DatePicker: FC = () => {
  const startDay = dayjs().startOf('month').startOf('week')
  const [startDate, setStartDate] = useState(startDay)

  // console.log('Start of day', startDay, startDay.add(1, 'month').startOf('week'));

  let dayIterator = startDate.clone();

  const days = [...Array(total)].map(() => {
    const day = dayIterator.clone();
    dayIterator = dayIterator.add(1, 'day');
    return day;
  });
  console.log(days);

  function nextMonth() {
    setStartDate(prev => (
      prev.add(1, 'month')
    ))
  }

  return (
    <SC.DatePicker>

      <SC.DatePickerHeader>
        <SC.ArrowButton>
          <i className='icon icon-arrowLeft'></i>
        </SC.ArrowButton>
        { month }
        <SC.ArrowButton onClick={ nextMonth }>
          <i className='icon icon-arrowRight'></i>
        </SC.ArrowButton>
      </SC.DatePickerHeader>

      <SC.Line>
        <SC.WeekDayLabel>пн</SC.WeekDayLabel>
        <SC.WeekDayLabel>вт</SC.WeekDayLabel>
        <SC.WeekDayLabel>ср</SC.WeekDayLabel>
        <SC.WeekDayLabel>чт</SC.WeekDayLabel>
        <SC.WeekDayLabel>пт</SC.WeekDayLabel>
        <SC.WeekDayLabel>сб</SC.WeekDayLabel>
        <SC.WeekDayLabel>вс</SC.WeekDayLabel>
      </SC.Line>

      <SC.Grid>
        {days.map(day => (
          <SC.DayButton key={day.format('DD/MM/YYYY')}>
            { day.format('D') }
          </SC.DayButton>
        ))}
      </SC.Grid>
    </SC.DatePicker>
  )
}

export default DatePicker