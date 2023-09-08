import { styled } from "styled-components"
import { NavLink } from "react-router-dom"
import Colors from "../../constants/colors"


export const BasicLink = styled(NavLink)`
  text-decoration: none;
  color: ${ props => props.theme.textColor };
  transition: all 0.3s ease-in-out;
  @media (any-hover: hover) {
   &:hover {
    color: ${ Colors.LINK_HOVER };
    text-decoration: underline;
   } 
  }
`