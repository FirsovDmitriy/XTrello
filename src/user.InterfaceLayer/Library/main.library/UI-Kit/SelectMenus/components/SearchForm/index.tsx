import { ChangeEvent, FC, FormEvent } from 'react'
import TextField from '../../../TextField'

type TypeProps = {
  value: string
}

const SearchForm: FC<TypeProps> = ({ value }) => {

  function handleSubmit(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      role='search'
    >

      <TextField
        placeholder='Поиск...'
        value={value}
        onChange={
          function (event: FormEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
        }}
        type='search'
        inputMode='search'
      />

    </form>
  )
}

export default SearchForm