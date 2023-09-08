import { styled } from "styled-components"
import Colors from "../../constants/colors"

export const TextField = styled.div`
  position: relative;
  display: inline-flex;
`

export const Input = styled.input<{ isError?: boolean, prepend?: boolean, append?: boolean }>`
  font-family: inherit;
  font-size: inherit;
  line-height: normal;
  width: 100%;
  padding: 10px 12px;
  padding-right: ${ props => (
    props.append ? '40px' : '12px'
  )};
  padding-left: ${ props => (
    props.prepend ? '40px' : '12px'
  )};
  background: transparent;
  border: 1px solid ${ props => (
    props.isError ? Colors.ERROR : Colors.BORDER
  )};
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(2, 149, 254, 0.25);
    border-color: ${ Colors.PRIMARY };
  }
  @media (any-hover: hover) {
    &:hover {
      border-color: ${ Colors.PRIMARY };
    } 
  }
`
 
export const IconPrepend = styled.span`
  position: absolute;
  top: calc(50% - 12px);
  left: 8px;
`

export const IconAppend = styled.span`
  position: absolute;
  top: calc(50% - 12px);
  right: 8px;
`

export const InvalidFeedback = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: ${ Colors.ERROR };
`