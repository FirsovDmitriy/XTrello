import { ChangeEvent, FC } from 'react'
import TextField from '../../../TextField'

import * as SC from './styled'


const SearchForm: FC = () => {

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <SC.SearchForm
      onSubmit={handleSubmit}
      role='search'
    >
      <TextField
        placeholder='Поиск'
      />
    </SC.SearchForm>
  )
}

export default SearchForm