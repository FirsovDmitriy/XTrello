import { FC, useState } from 'react'
import Container from '../../../Library/main.library/UI-Kit/Container'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Card from '../../../Library/main.library/Widgets/Card.widget'
import Empty from '../../../Library/main.library/UI-Kit/Empty'

const HomePage: FC = () => {
  const [isData, setisData] = useState(true)

  return (
    <>
      {isData ? (
          <Empty text='Data not found'>
            <Button>
              Добавить
            </Button>
          </Empty>
        ) : (
          <Container>
            <div className="grid grid-cols-[1fr_min-content] gap-6 mb-6">
              <TextField
                placeholder="Поиск..."
                appendIcon={<i className="icon Search-icon"></i>}
              />
              <Button variant="outlined">
                Добавить
              </Button>
            </div>

            <div>
              <Card />
            </div>

          </Container>
        )}
    </>
  )
}

export default HomePage
