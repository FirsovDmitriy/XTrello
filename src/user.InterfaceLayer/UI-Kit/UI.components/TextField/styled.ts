import { styled, css } from "styled-components"

const BasicInputStyles = css`
  width: 100%;
  transition: background 0.3s ease-in-out;
  background: transparent;
  color: inherit;
  @media (any-hover: hover) {
    &:hover {
      
    } 
  }
`

export const TextField = styled.div`
  position: relative;
  display: flex;

  margin-bottom: 50px;
`

export const Input = styled.input<{ isError?: boolean, $prepend?: boolean, $append?: boolean }>`

  ${ BasicInputStyles };
  
  height: 3rem;
  padding-right: ${ props => (
    props.$append ? '40px' : '12px'
  )};
  padding-left: ${ props => (
    props.$prepend ? '40px' : '12px'
  )};
  border: 1px solid ${ props => props.theme.border.primary };
  border-radius: 4px;
  &::placeholder {
    
  }
  &:focus {
    outline-color: ${ props => props.theme.border.primary };
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
  color: rebeccapurple;
`