import { styled, css } from "styled-components"
// import Colors from "../../constants/colors"
import { IColor } from "./type"

const BasicTitleStyles = css`
  font-weight: 600;
  line-height: normal;
  color: ${ props => props.theme.textColor };
`

export const Typography = styled.p<IColor>`
  margin: 0;
  color: ${ props => (
    props.$color ? props.$color : props.theme.textColor
  ) };
  font-size: 16px;
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