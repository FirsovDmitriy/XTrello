import { styled } from "styled-components"

export const YearCalendar = styled.div`
  --number-cell: 4;
  --cell-size: 1fr;
  display: grid;
  grid-template-columns: repeat(var(--number-cell), var(--cell-size));
  grid-template-rows: repeat(var(--number-cell), var(--cell-size));
  justify-items: center;
  align-items: center;
  height: 100%;
`

export const Button = styled.button<{ $thisYear: boolean }>`
  transition: background 0.3s ease-in-out;
  border: none;
  background: ${ props => props.$thisYear ? props.theme.background.secondary : 'transparent' };
  height: 50px;
  width: 100%;
  border-radius: 4px;
  font-size: 15px;
  @media (any-hover: hover) {
   &:hover {
    background: ${ props => props.theme.background.hovered };
   } 
  }
`