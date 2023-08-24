import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const BasicLink = styled(NavLink)`
  --link-decoration: none;
  transition: all 0.3s ease-in-out;
  text-decoration: var(--link-decoration);
  color: ${ props => props.theme.textColor };
  @media (any-hover: hover) {
   &:hover {
    color: purple;
    --link-decoration: underline;
   } 
  }
`