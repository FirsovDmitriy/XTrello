import { styled } from "styled-components"
import Colors from "../../constants/colors"

export const Tag = styled.span<{ $bgColor?: string }>`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  font-size: 14px;
  padding: 2.6px 8px 4px 8px;
  background: ${ props => (
    props.$bgColor || Colors.PRIMARY
  )};
  color: #F4F4F4; // TODO: Put a variable
  border-radius: 4px;
  outline: transparent solid 2px;


  margin-left: 40px;
`