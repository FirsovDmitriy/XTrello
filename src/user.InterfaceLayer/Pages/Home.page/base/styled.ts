import { styled } from 'styled-components'
import { Container } from '../../../UI-Kit/UI.components/Container/styled'

export const HomeRow = styled(Container)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 264px min-content;
  gap: 24px;
  margin: 0;
`

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px;
  margin: 0 0 auto 0;
`

export const Form = styled.form``

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px 0;
  &:last-child {
    margin: 0;
  }
`

export const FormLabel = styled.label`
  margin: 0 0 8px 0;
  > span {
    color: ${ props => props.theme.errorColor };
  }
`

export const FormRequired = styled.span`
  color: ${ props => props.theme.errorColor };
  margin: 0 0 0 4px;
`
