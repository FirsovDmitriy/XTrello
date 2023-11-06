import { styled } from "styled-components"

export const Tag = styled.span<{ $bgColor?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 2.6px 8px 4px 8px;
  background: ${ props => props.$bgColor || props.theme.pallete.background.default };
  border-radius: ${ props => props.theme.borderRadius };
  outline: transparent solid 2px;
`