import { styled, css } from "styled-components"
import Colors from "../../constants/colors"

const BasicStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Modal = styled.div<{$isShow: boolean}>`
  ${ BasicStyle }
  display: grid;
  pointer-events: ${ props => props.$isShow ? 'all' : 'none' };
  z-index: 55;
`

export const Content = styled.section<{$isShow: boolean, size?: 'small'}>`
  place-self: center;
  display: grid;
  grid-template-rows: 65px 1fr;
  width: ${ props => props.size === 'small' ? '500px' : '640px' };
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
  background: ${ props => props.theme.backColor };
  visibility: ${ props => (
    props.$isShow ? 'visible' : 'hidden'
  ) };
  transition: all 0.3s ease-in-out;
  transform: translateX(${ props => (
    props.$isShow ? 0 : '-100px'
  ) });
  z-index: 99;
  position: relative;
  opacity: ${ props => (
    props.$isShow ? 1 : 0
  ) };
`

export const Overlay = styled.div<{$isShow: boolean}>`
  display: grid;
  ${ BasicStyle }
  background: rgba(255, 255, 255, 0.6);
  opacity: ${ props => (
    props.$isShow ? 1 : 0
  ) };
  pointer-events: ${ props => props.$isShow ? 'all' : 'none' };
  transition: opacity 0.3s ease-in-out;
  z-index: 55;
`

export const Heading = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${ Colors.BORDER };
`

export const ModalActions = styled.div`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid ${ Colors.BORDER };
`