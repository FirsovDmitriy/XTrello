import { FC } from 'react'
import Container from '../../../UI-Kit/UI.components/Container'
import {
  Wrapper,
  Form,
  FormMain,
  FormMainWrapper,
  FormRow,
  FormLabel,
  FormFooter
} from './styled'
import Typography from '../../../UI-Kit/UI.components/Typography'
import Button from '../../../UI-Kit/UI.components/Button'
import Variant from '../../../UI-Kit/UI.components/Button/enum'
import TextField from '../../../UI-Kit/UI.components/TextField'
import Textarea from '../../../UI-Kit/UI.components/Textarea'
import SelectMenus from '../../../UI-Kit/UI.components/SelectMenus'
import { useNavigate } from 'react-router-dom'

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
  {
    value: 'Option6',
    label: 'Option6',
    disabled: true,
  },
  {
    value: 'Item6',
    label: 'Item6',
  },
  {
    value: 'Option8',
    label: 'Option8',
  },
  {
    value: 'Item4',
    label: 'Item4',
  },
  {
    value: 'Item8',
    label: 'Item8',
  },
  {
    value: 'Text',
    label: 'Text',
  },
  {
    value: 'Item3',
    label: 'Item3',
  },
];


const CreatePage: FC = () => {

  const navigate = useNavigate()

  return (
    <Wrapper>
      <Container>
        <Typography variant='h2'>Создание задачи</Typography>
      </Container>
      <Container>
        <Form>
          <FormMain>
           <FormMainWrapper>
              <FormRow>
                <FormLabel>Название</FormLabel>
                <TextField placeholder='Введите текст...' />
              </FormRow>

              <FormRow>
                <FormLabel>Описание</FormLabel>
                <Textarea placeholder='Введите текст...' />
              </FormRow>

              <FormRow>
                <FormLabel>Исполнитель</FormLabel>
                <SelectMenus
                  options={options}
                  placeholder='Не назначен'
                />
              </FormRow>

           </FormMainWrapper>
          </FormMain>
          <FormFooter>
            <Button
              type='button'
              variant={Variant.GHOST}
              onClick={() => navigate(-1)}
            >
              Отмена
            </Button>
            <Button>Создать задачу</Button>
          </FormFooter>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default CreatePage