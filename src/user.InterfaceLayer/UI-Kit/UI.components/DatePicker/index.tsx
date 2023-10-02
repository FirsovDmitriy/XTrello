import { FC, useState } from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);

import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import 'dayjs/locale/ru';

import * as SC from './styled';
import YearCalendar from './YearCalendar';
import MonthCalendar from './MonthCalendar';

dayjs.locale('ru');

const today = dayjs(new Date());
const total = 42;

const DatePicker: FC = () => {
  const [isYears, setIsYears] = useState<boolean>(false);
  const [isMonth, setIsMonth] = useState<boolean>(false);
  const [rootDate, setRootDate] = useState(today);
  const startDay = rootDate.startOf('month').startOf('week');
  let dayIterator = startDay.clone();

  const days = [...Array(total)].map(() => {
    const day = dayIterator.clone();
    dayIterator = dayIterator.add(1, 'day');
    return day;
  });

  function prevMonth() {
    setRootDate((prev) => prev.clone().subtract(1, 'month'));
  }

  function nextMonth() {
    setRootDate((prev) => prev.clone().add(1, 'month'));
  }

  return (
    <SC.DatePicker>
      <SC.DatePickerHeader>
        <SC.ArrowButton onClick={prevMonth}>
          <i className='icon icon-arrowLeft'></i>
        </SC.ArrowButton>

        <SC.MonthSelection onClick={() => setIsMonth(!isMonth)}>
          {rootDate.format('MMMM')}
          <i className='icon icon-arrowDown'></i>
        </SC.MonthSelection>

        <SC.YearSelection onClick={() => setIsYears(!isYears)}>
          {rootDate.format('YYYY')}
          <i className='icon icon-arrowDown'></i>
        </SC.YearSelection>

        <SC.ArrowButton onClick={nextMonth}>
          <i className='icon icon-arrowRight'></i>
        </SC.ArrowButton>
      </SC.DatePickerHeader>

      {(function (): JSX.Element {
        if (isMonth) return <MonthCalendar />;
        if (isYears) return <YearCalendar />;
        return (
          <div>
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
              {days.map((day) => (
                <SC.DayButton
                  $isToday={day.isSame(rootDate, 'day') ? true : false}
                  onClick={() => console.log(day)}
                  key={day.format('DD/MM/YYYY')}
                >
                  {day.format('D')}
                </SC.DayButton>
              ))}
            </SC.Grid>
          </div>
        );
      })()}
    </SC.DatePicker>
  );
};

export default DatePicker;
