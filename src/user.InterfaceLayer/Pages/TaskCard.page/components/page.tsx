import { FC } from 'react'
import Container from '../../../Library/main.library/UI-Kit/Container'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Typography from '../../../Library/main.library/UI-Kit/Typography'
import List from '../../../Library/main.library/UI-Kit/List'
import { useNavigate } from 'react-router-dom'
import CommentForm from './CommentForm'
import Avatar from '../../../Library/main.library/UI-Kit/Avatar'

const TaskCardPage: FC = () => {

  var navigate = useNavigate()

  return (
    <>
      <div>
        <Container className='flex justify-start'>
          <Button
              onClick={() => navigate(-1)}
              // variant='ghost'
              prependIcon={ <i className='icon ArrowBack-icon'></i> }
            >
              Назад
            </Button>
        </Container>
      </div>

      <section>
        <Container className='grid grid-cols-12'>
          <div className='col-span-8 flex flex-col gap-6'>
            <Typography
              className=''
              variant='title2'
              component='h2'
            >
              #xxx000xxxxx000xxxx0000
            </Typography>
            <Typography
              variant='title2'
              component='h2'
              className=''
            >
              Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка если добавить
            </Typography>
            <div className='flex gap-4'>
              <p>В работе</p>
              <p className='text-secondaryColor'>Создана 17 сен 2022 в 13:55</p>
            </div>
            <p>
              Описание задачи далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
            </p>
            <Typography
              variant='title2'
              component='h2'
            >
              Астивность
            </Typography>
            <List className='flex-col gap-5'>
              <List.Item>
                <div className='flex gap-4'>
                  <p>Котов С.В.</p>
                  <p className='text-secondaryColor'>изменил(а) название</p>
                  <p className='text-secondaryColor'>20 дек 2022 в 17:45</p>
                </div>
              </List.Item>
              <List.Item>
                <div className='flex gap-4'>
                  <p>Котов С.В.</p>
                  <p className='text-secondaryColor'>изменил(а) описание</p>
                  <p className='text-secondaryColor'>04 янв в 09:01</p>
                </div>
              </List.Item>
              <List.Item>
                <div className='flex gap-4'>
                  <Avatar />
                  <p> Котов С.В.</p>
                  <p className='text-secondaryColor'>назначил(а) исполнителя</p>
                  <p>Иванов И.И.</p>
                  <p className='text-secondaryColor'>01 мая в 22:58</p>
                </div>

                <div className='mt-4 p-4 border border-thirdColor rounded'>
                  <div className='flex gap-4'>
                    <span>Иванов И.И.</span>
                    <span className='text-secondaryColor'>02 мая в 08:58</span>
                  </div>
                  <p className='p-2'>Я не знаю, как это делать</p>

                  <div className='mt-4 p-4 border border-thirdColor rounded'>
                    <p className='flex gap-4'>
                      <span>Котов С.В.</span>
                      <span className='text-secondaryColor'>02 мая в 10:30</span>
                    </p>
                    <p className='p-2'>Там все просто</p>
                  </div>

                  <CommentForm />

                </div>

              </List.Item>
            </List>
          </div>
          <aside className='col-span-4'>
            Sidebar
          </aside>
        </Container>
      </section>

    </>
  )
}

export default TaskCardPage