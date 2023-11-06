import { styled } from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid #0D0D25;
  border-radius: 4px;
  margin: 1.5rem;
`

export const Form = styled.form``

export const FormMain = styled.div`
  border-top: 1px solid #0D0D25; 
  padding: 1.5rem 0;
`

export const FormMainWrapper = styled.div`
  padding: 1.5rem;
  width: 45rem;
`

export const FormRow = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  &:last-child {
    margin: 0;
  }
`

export const FormLabel = styled.label`
  width: 10rem;
`

export const FormFooter = styled.div`
  border-top: 1px solid darkgreen;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 1.5rem 0;
`