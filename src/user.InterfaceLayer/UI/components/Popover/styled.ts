import { styled } from "styled-components"

export const Popover = styled.div`
  position: relative;
  display: inline-flex;
`

export const Trigger = styled.div`
  //
`
export const Content = styled.div<{ $isShow: boolean }>`
  position: absolute;
  right: 0;
  z-index: 9;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${ props => props.theme.backColor };
  opacity: ${ props => props.$isShow ? 1 : 0 };
  pointer-events: ${ props => props.$isShow ? 'all' : 'none' };
  min-width: 135px;
  width: max-content;
`