import { styled } from "styled-components";

export const Pagination = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-content: center;
  gap: 32px;
  padding: 20px;
`

export const PaginationNav = styled.div`
  display: flex;
  gap: 8px;
`

export const PaginationForm = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const FormLabel = styled.p`
  font-size: 14px;
`

export const FormInput = styled.input`
  padding: 0 12px;
  width: 70px;
  height: 100%;
  border: 1px solid ${ props => props.theme.border.primary };
  background: transparent;
  border-radius: ${ props => props.theme.borderRadius };
`

export const PaginationDisplayedRow = styled.p`
  font-size: 14px;
`