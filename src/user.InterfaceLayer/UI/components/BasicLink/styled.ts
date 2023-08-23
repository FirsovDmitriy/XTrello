import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const BasicLink = styled(NavLink)`
  transition: color 0.3s ease-in-out;
  @media (any-hover: hover) {
   &:hover {
    color: purple
   } 
  }
`