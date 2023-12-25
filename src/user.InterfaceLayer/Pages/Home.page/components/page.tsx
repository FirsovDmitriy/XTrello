import { FC, useState } from 'react'
import Container from '../../../Library/main.library/UI-Kit/Container'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Card from '../../../Library/main.library/Widgets/Card.widget'
import Empty from '../../../Library/main.library/UI-Kit/Empty'
import List from '../../../Library/main.library/UI-Kit/List'
import Add from './Add'
import Dropdowns from '../../../Library/main.library/UI-Kit/Dropdowns'
import SelectMenus from '../../../Library/main.library/UI-Kit/SelectMenus'
import Preloader from '../../../Library/main.library/UI-Kit/Preloader'
import Toast from '../../../Components/GeneralComponents/ModalWindow/Toast'

const HomePage: FC = () => {
  const [isData] = useState(false)
  const [show, setShow] = useState<boolean>(false)

  return (
    <section className='flex-auto'>

      {/* <Preloader /> */}
      <Toast message='This is a success message!' />

      {isData
        ? <Empty text='Data not found'>
            <Button>
              Добавить
            </Button>
          </Empty>

        : <Container className=''>
            <div className="grid grid-cols-[1fr_min-content_min-content] gap-6 mb-6">
              <TextField
                placeholder="Поиск..."
                appendIcon={<i className="icon Search-icon"></i>}
              />

              <Dropdowns onClose={() => setShow(false)}>
                <Dropdowns.Toggle>
                  <Button onClick={() => setShow(!show)} variant='square'>
                    <i className='icon Filter-icon'></i>
                  </Button>
                </Dropdowns.Toggle>
                <Dropdowns.Menu show={show}>
                  <Dropdowns.Item>
                    <SelectMenus
                      options={[{label: 'Text', value: 'Text'}, {label: 'Text 2', value: 'Text 2'}, {label: 'Text 3', value: 'Text 3'}, {label: 'Text 4', value: 'Text 4'}]}
                      placeholder='Выберите значение...'
                    />
                  </Dropdowns.Item>
                </Dropdowns.Menu>
              </Dropdowns>

              <Add />
            </div>

            <div className='h-full flex flex-col'>
              <List className='flex-col gap-5'>
                {[...Array(5)].map((_, index) => (
                  <List.Item key={index}>
                    <Card />
                  </List.Item>
                ))}
              </List>
            </div>

          </Container>}
    </section>
  )
}

export default HomePage
