import { styled } from "styled-components"
import Colors from "../../constants/colors"
import { NavLink } from "react-router-dom"

export const AppLink = styled(NavLink)`

  @media (any-hover: hover) {
   &:hover {
    color: ${ Colors.LINK_HOVER };
    text-decoration: underline;
   } 
  }
`