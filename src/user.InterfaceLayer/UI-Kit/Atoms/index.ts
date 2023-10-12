import { styled } from "styled-components"

export const Field = styled.div`
  width: 100%;
  border: 1px solid ${ props => props.theme.border.primary };
  border-radius: 4px;
  height: 3rem;
  display: flex;
  align-items: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
`
