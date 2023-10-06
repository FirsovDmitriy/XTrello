import { styled } from "styled-components"
import Colors from "../../../constants/colors"

export const MonthCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-evenly;
  grid-auto-flow: row;
  grid-auto-rows: 36px;
  height: 290px;
`

export const MonthButton = styled.button<{ isActive: boolean }>`
  justify-self: start;
  height: 36px;
  padding: 0 16px;
  border-radius: 18px;
  border: none;
  background: ${ ({ isActive }) => (
    isActive ? Colors.PRIMARY : 'transparent'
   ) };
  transition: background 0.3s ease-in-out;
  &::first-letter {
    text-transform: uppercase;
  }
  @media screen {
   &:hover {
    background: ${ Colors.SECONDARY_BG };
   } 
  }
`