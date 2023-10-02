import { styled, css } from "styled-components"
import Colors from "../../constants/colors"

export const DatePicker = styled.div`
  --rows: 1;
  width: 21rem;
  padding: 1rem;
  box-shadow: 0px 8px 32px 0px rgba(64, 64, 122, 0.12);

  margin-bottom: 50px;
`

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const ArrowButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
`

export const MonthSelection = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid ${ Colors.BORDER };
  border-radius: 4px;
`

export const YearSelection = styled(MonthSelection)``

const BasicStylesCell = css`
  font-size: 14px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeekDayLabel = styled.span`
  ${ BasicStylesCell };
`

export const DayButton = styled.button<{ $isToday: boolean }>`
  ${ BasicStylesCell };
  border-radius: 50%;
  background: ${ ({ $isToday }) => $isToday ? Colors.PRIMARY : 'transparent' };
  color: ${ ({ $isToday }) => $isToday ? Colors.WHITE : 'inherit' };
  border: none;
  @media (any-hover: hover) {
   &:hover {
    outline: 1px solid ${ Colors.PRIMARY };
   }
  }
`

const BasicStyles = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
`

export const Line = styled.div`
  ${ BasicStyles };
  border-bottom: 1px solid ${ Colors.BORDER };
`

export const Grid = styled.div`
  ${ BasicStyles };
  --rows: 6;
`