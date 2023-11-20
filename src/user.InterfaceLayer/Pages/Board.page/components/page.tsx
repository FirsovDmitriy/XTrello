import { FC } from 'react'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Container from '../../../Library/main.library/UI-Kit/Container'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Card from './Card'

const Board: FC = () => {
  return (
    <section>
      <Container>
        <div className="py-4 grid grid-cols-[1fr_min-content] gap-6">
          <TextField
            placeholder="Поиск..."
          />
          <Button>Добавить</Button>
        </div>

        <div>
          <Card />
        </div>

      </Container>
    </section>
  )
}

export default Board
