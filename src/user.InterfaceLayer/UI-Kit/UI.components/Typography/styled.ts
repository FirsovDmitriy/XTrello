import { styled, css } from "styled-components"
import { IColor } from "./type"

const BasicTitleStyles = css`
  font-weight: 600;
`

export const Typography = styled.p<IColor>`
  color: ${ props => (
    props.$color ? props.$color : props.theme.textColor
  ) };
`

export const Title1 = styled.h1`
  ${ BasicTitleStyles };
  font-size: 40px;
`

export const Title2 = styled.h2`
  ${ BasicTitleStyles };
  font-size: 24px;
`

export const Span = styled.span`
  display: block;
`