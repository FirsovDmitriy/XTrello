import { styled } from "styled-components"
import Colors from "../../constants/colors"
import { MAX_HEIGHT } from "./constants"

export const Textarea = styled.textarea`
  padding: 0.625rem 0.75rem;
  width: 100%;
  max-height: ${ MAX_HEIGHT }px;
  min-height: 100px;
  border: 2px solid ${ Colors.BORDER };
  background: transparent;
  color: inherit;
  border-radius: 4px;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  resize: none;
  overflow-wrap: break-word;
  &::placeholder {
    color: ${ Colors.PLACEHOLDER };
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px rgba(2, 149, 254, 0.25);
    border-color: ${ Colors.PRIMARY };
  }
  @media (any-hover: hover) {
   &:hover {
    border-color: ${ Colors.PRIMARY };
   }
  }
`