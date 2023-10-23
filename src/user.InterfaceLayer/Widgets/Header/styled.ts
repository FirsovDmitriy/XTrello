import { styled } from "styled-components"
import { Container } from "../../UI-Kit/UI.components/Container/styled"
import { Button } from "../../UI-Kit/UI.components/Button/styled"

export const Header = styled.header`
  /* background-color: #596dcf; */
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const HeaderProfile = styled(Button)`
  gap: 8px;
`