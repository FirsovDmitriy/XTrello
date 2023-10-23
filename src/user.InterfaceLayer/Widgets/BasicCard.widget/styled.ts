import { styled } from 'styled-components'

export const BasicCardActions = styled.div`
  margin-left: 16px;
  display: none;
`

export const BasicCard = styled.a`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 0 16px 8px 16px;
  border-bottom: 1px solid ${ props => props.theme.border.secondary };

  @media (any-hover: hover) {
    &:hover {
      ${ BasicCardActions } {
        display: block;
      }
    }
  }
`

export const BasicCardMain = styled.div`
  display: flex;
  flex-direction: column;
`

export const BasicCardRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 16px;
  align-items: center;
  &:first-child {
    margin: 0 0 auto 0;
  }
`
