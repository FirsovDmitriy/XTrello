import { styled } from "styled-components"
import Style from "../../constants/style"
import Colors from "../../constants/colors"

export const Content = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  /* max-width: 400px;
  width: max-content; */
  margin-top: 20px;
  /* box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border: ${ Style.radius };
  background: ${ Colors.WHITE }; */
  visibility: hidden;
  transition: all 0.3s ease-in-out;
`

export const Tooltip = styled.div`
  position: relative;
  display: inline-flex;
  &:hover {
    ${ Content } {
      visibility: visible;
    }
  }
`

export const Img = styled.img`
  position: absolute;
  left: calc(50% - 12px);
  bottom: 98%;
  z-index: 1;
`

export const Wrapper = styled.div`
  /* padding: 16px; */
  position: relative;
`

export const Text = styled.p`
  padding: 16px;
  max-width: 400px;
  width: max-content;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border: ${ Style.radius };
  background: ${ props => props.theme.backColor };
`