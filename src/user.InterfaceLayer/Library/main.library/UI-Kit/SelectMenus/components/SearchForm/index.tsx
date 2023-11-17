import { ChangeEvent, FC } from 'react'
import TextField from '../../../TextField'

import * as SC from './styled'

type TypeProps = {
  value: string
}

const SearchForm: FC<TypeProps> = ({ value }) => {


  function handleSubmit(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault()
  }

  return (
    <SC.SearchForm
      onSubmit={handleSubmit}
      role='search'
    >

      <TextField
        placeholder='Поиск...'
        value={value}
        onChange={
          function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
        }}
        $sx={{
          padding: '0 1rem',
          bg: 'green'
        }}
        type='search'
        inputMode='search'
      />

    </SC.SearchForm>
  )
}

export default SearchForm