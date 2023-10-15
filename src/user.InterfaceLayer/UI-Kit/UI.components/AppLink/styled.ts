import { styled } from "styled-components"
import { NavLink } from "react-router-dom"

export const AppLink = styled(NavLink)`
  color: ${ props => props.theme.text.white };
  @media (any-hover: hover) {
   &:hover {
    color: ${ props => props.theme.text.hovered };
    text-decoration: underline;
   } 
  }
`