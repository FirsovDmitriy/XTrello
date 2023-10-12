import { styled, css } from "styled-components"
import { Field } from "../../Atoms"

const BasicInputStyles = css`
  width: 100%;
  background: transparent;
  color: ${ props => props.theme.textColor };
  font-size: 1rem;
  &::placeholder {
    color: inherit;
  }
`

export const TextField = styled(Field)`
  &:focus-within {
    outline-color: ${ props => props.theme.border.primary };
  }

  margin-bottom: 50px;
`

export const Input = styled.input<{ isError?: boolean }>`

  ${ BasicInputStyles };
  padding: 0 12px;
  border: none;

  &::placeholder {}



  &:disabled {
    background: ${ props => props.theme.background.disabled };
    border: none;
    &::placeholder {
      color: ${ props => props.theme.text.disabled };
    }
  }
`

export const IconPrepend = styled.span`
  position: absolute;
  top: calc(50% - 12px);
  left: 8px;
`

export const IconAppend = styled.span`
  margin: 0 8px 0 0;
`

export const InvalidFeedback = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: rebeccapurple;
`