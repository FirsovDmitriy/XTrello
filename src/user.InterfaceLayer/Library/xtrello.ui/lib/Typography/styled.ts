import { styled, css } from "styled-components"
import { TypeProps } from "./type"

const BasicTitleStyles = css`
  font-weight: 600;
  color: ${ props => props.theme.pallete.text.primary };
`

export const Typography = styled.p<TypeProps>`
  font-size: ${ props => props.$fontSize || 'inherit' };
  color: ${ props => props.$color ? props.$color : props.theme.pallete.text.primary };
`

export const Title1 = styled.h1`
  ${ BasicTitleStyles };
  font-size: 2rem;
`

export const Title2 = styled.h2`
  ${ BasicTitleStyles };
  font-size: 1.5rem;
`

export const Span = styled.span`
  display: block;
  color: ${ props => props.theme.pallete.text.primary };
`