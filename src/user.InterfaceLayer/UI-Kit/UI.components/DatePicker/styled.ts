import { styled, css } from "styled-components"

export const DatePicker = styled.div<{ $open: boolean }>`
  position: absolute;
  left: 0;
  z-index: -1;
  top: 100%;
  --rows: 1;
  width: 21rem;
  padding: 1rem;
  box-shadow: 0px 8px 32px 0px rgba(64, 64, 122, 0.12);
  background: ${ props => props.theme.backColor };

  visibility: ${ props => props.$open ? 'visible' : 'hidden' };
  transform: translateY(${ props => props.$open ? 0 : '-100px' });
  transition: transform 1.6s ease-out;
  opacity: ${ props => props.$open ? 1 : 0 };
`

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ArrowButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
`

export const MonthSelection = styled.button`
  font-weight: 600;
  padding: 10px;
  border: none;
  @media (any-hover: hover) {
   &:hover {
    color: ${ props => props.theme.background.primary };
   } 
  }
`

export const MonthSelectionText = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`

export const YearSelection = styled(MonthSelection)``

const BasicStylesCell = css`
  font-size: 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeekDayLabel = styled.span`
  ${ BasicStylesCell };
`

export const DayButton = styled.button<{ $isToday: boolean, $thisMonth: boolean }>`
  ${ BasicStylesCell };
  border-radius: 50%;
  background: ${ props => props.$isToday ? props.theme.background.primary : 'transparent' };
  color: ${ props => {
    if(props.$isToday) return props.theme.text.white
    if(props.$thisMonth) return props.theme.background.secondary
    return 'inherit'
  }};
  border: none;
  @media (any-hover: hover) {
   &:hover {
    outline: 1px solid ${ props => props.theme.background.primary };
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
  border-bottom: 1px solid ${ props => props.theme.background.primary };
`

export const Grid = styled.div`
  ${ BasicStyles };
  --rows: 6;
`

export const DatePickerFooter = styled.div`
  display: flex;
  justify-content: center;
`


export const DatePickerWrapper = styled.div`
  position: relative;
  z-index: 4;
  background: ${ props => props.theme.backColor };
`