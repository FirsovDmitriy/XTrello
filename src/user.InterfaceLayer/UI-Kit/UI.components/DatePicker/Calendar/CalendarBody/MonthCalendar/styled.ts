import { styled } from "styled-components"

export const MonthCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
`

export const MonthButton = styled.button<{ $isActive: boolean }>`
  height: 48px;
  border-radius: 4px;
  border: none;
  background: ${ props => props.$isActive ? props.theme.background.secondary : 'transparent' };
  transition: background 0.3s ease;
  @media screen {
   &:hover {
    background: ${ props => props.theme.background.hovered };
   } 
  }
`

export const MonthText = styled.span`
  font-size: 15px;
  &::first-letter {
    text-transform: uppercase;
  }
`