import { FC, FormEvent, useState } from 'react'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Container from '../../../Library/main.library/UI-Kit/Container'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Dropdowns from '../../../Library/main.library/UI-Kit/Dropdowns'
import SelectMenus from '../../../Library/main.library/UI-Kit/SelectMenus'

const options = [
  {
    value: 'Option1',
    label: 'Option 1',
  },
  {
    value: 'Option2',
    label: 'Option 2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option 3',
  },
  {
    value: 'Option4',
    label: 'Option 4',
  },
  {
    value: 'Option5',
    label: 'Option 5',
  },
  {
    value: 'Option6',
    label: 'Option 6',
    disabled: true,
  },
]

const FilterRow: FC = () => {
  var [show, setShow] = useState<boolean>(false)
  var [status, setStatus] = useState<string[]>([])
  var [author, setAuthor] = useState('')
  console.log('selected', status)

  return (
    <Container>
      <div className="py-4 grid grid-cols-[1fr_min-content] gap-6">
        <TextField
          placeholder="Поиск..."
          appendIcon={ <i className='icon Search-icon'></i> }
        />
        <Dropdowns onClose={() => setShow(false)}>
          <Dropdowns.Toggle>
            <Button variant="square" onClick={() => setShow(!show)}>
              <i className="icon Filter-icon"></i>
            </Button>
          </Dropdowns.Toggle>
          <Dropdowns.Menu show={show}>
            <div className="p-4">
              <div className="mb-6">
                <label>
                  <p className="text-secondaryColor mb-2">Статус</p>
                  <SelectMenus
                    multiple
                    options={options}
                    placeholder="Выберите значение..."
                    value={status}
                    onChange={setStatus}
                  />
                </label>
              </div>

              <div className="mb-6">
                <label htmlFor="">
                  <p className="text-secondaryColor mb-2">Автор</p>
                  <SelectMenus
                    options={options}
                    placeholder="Выберите значение..."
                    value={author}
                    onChange={setAuthor}
                  />
                </label>
              </div>

              <div className="">
                <label htmlFor="">
                  <p className="text-secondaryColor mb-2">Исполнитель</p>
                  <SelectMenus
                    multiple
                    options={options}
                    placeholder="Выберите значение..."
                    value={status}
                    onChange={(event: FormEvent<HTMLInputElement>) => {
                      setStatus([...status, event.currentTarget.value])
                    }}
                  />
                </label>
              </div>
            </div>
          </Dropdowns.Menu>
        </Dropdowns>
      </div>
    </Container>
  )
}

export default FilterRow
