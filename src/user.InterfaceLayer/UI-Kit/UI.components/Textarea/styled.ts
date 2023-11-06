import { styled } from "styled-components"
import { MAX_HEIGHT } from "./constants"

export const Textarea = styled.textarea`
  padding: 0.625rem 0.75rem;
  width: 100%;
  max-height: ${ MAX_HEIGHT }px;
  min-height: 100px;
  border: 1px solid ${ props => props.theme.border.primary };
  background: transparent;
  color: inherit;
  border-radius: ${ props => props.theme.borderRadius };
  resize: none;
  overflow-wrap: break-word;
  outline-width: 2px;
  outline-offset: 2px;
  &::placeholder {
    color: ${ props => props.theme.textColor };
  }
  &:focus {
    outline-style: solid;
    outline-color: ${ props => props.theme.border.primary };
  }
`