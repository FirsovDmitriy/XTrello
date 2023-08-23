import { styled } from "styled-components"
import Colors from "../../constants/colors"

export const Wrapper = styled.div<{ isError?: boolean }>`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${ props => props.isError ? Colors.ERROR : Colors.BORDER };
  border-radius: 4px;
  padding: 10px 12px;
  @media (any-hover: hover) {
    &:hover {
      border-color: ${ Colors.PRIMARY };
    } 
  }
`

export const Input = styled.input`
  font-size: inherit;
  width: 100%;
  line-height: normal;
  /* padding: 10px 12px; */
  font-family: inherit;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
  /* @media (any-hover: hover) {
    &:hover {
      border-color: ${ Colors.PRIMARY };
    } 
  } */
`

export const IconPrepend = styled.span`
  margin: 0 8px 0 0;
`

export const IconAppend = styled.span`
  margin: 0 0 0 8px;
`