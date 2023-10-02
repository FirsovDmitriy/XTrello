import { styled } from "styled-components"
import Colors from "../../../constants/colors"

export const YearCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 36px;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  height: 280px;
`

export const Button = styled.button`
  border-radius: 18px;
  transition: background 0.3s ease-in-out;
  border: none;
  height: 36px;
  width: 62px;
  @media (any-hover: hover) {
   &:hover {
    background: ${ Colors.SECONDARY_BG };
   } 
  }
`