import { FC, useState } from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);

import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import 'dayjs/locale/ru';

import YearCalendar from './CalendarBody/YearCalendar';
import MonthCalendar from './CalendarBody/MonthCalendar';
import Button from '../../Button';
import Variant from '../../Button/enum';

import { IProps } from './type';

import * as SC from '../styled';

dayjs.locale('ru');

const today = dayjs(new Date());
const total = 42;

const Calendar: FC<IProps> = ({ open, selectDate }) => {
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

  function setMonth(month: dayjs.Dayjs) {
    setRootDate((prev) => prev.set('month', month.format('M') - 1));
    console.log(month.format('M'));
    setIsMonth(false);
  }

  function handleToday() {
    setRootDate(today)
    if(isYears) setIsYears(false)
    if(isMonth) setIsMonth(false)
  }

  return (
    <SC.DatePicker $open={open}>
      <SC.DatePickerHeader>

        <SC.ArrowButton onClick={prevMonth}>
          <i className='icon ArrowBack-icon'></i>
        </SC.ArrowButton>

        <SC.MonthSelection onClick={() => setIsMonth(!isMonth)}>
          <SC.MonthSelectionText>
            { rootDate.format('MMMM') }
          </SC.MonthSelectionText>
        </SC.MonthSelection>

        <SC.YearSelection onClick={() => setIsYears(!isYears)}>
          { rootDate.format('YYYY') }
        </SC.YearSelection>

        <SC.ArrowButton onClick={nextMonth}>
          <i className='icon ArrowForward-icon'></i>
        </SC.ArrowButton>

      </SC.DatePickerHeader>

      {/* TODO: */}

      <div style={{ height: '340px' }}>
        {(function (): JSX.Element {
          if (isMonth) return <MonthCalendar setMonth={setMonth} />;
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
                    $thisMonth={ day.isSame(rootDate, 'month') ? false : true }
                    onClick={() => selectDate(day.format('DD/MM/YYYY'))}
                    key={day.format('DD/MM/YYYY')}
                  >
                    {day.format('D')}
                  </SC.DayButton>
                ))}
              </SC.Grid>
            </div>
          );
        })()}
      </div>
      
      <SC.DatePickerFooter>
        <Button
          variant={ Variant.GHOST }
          onClick={handleToday}
        >
          Today
        </Button>
      </SC.DatePickerFooter>

    </SC.DatePicker>
  );
};

export default Calendar
