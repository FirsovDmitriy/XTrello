export interface IProps {
  children: JSX.Element | JSX.Element[]
  buttonTrigger: JSX.Element
  onClose: () => void
  isShow: boolean
}