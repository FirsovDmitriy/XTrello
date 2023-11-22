import { FC, useState } from 'react'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Container from '../../../Library/main.library/UI-Kit/Container'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import List from '../../../Library/main.library/UI-Kit/List'
import Column from './Column'
import styled from './styled.module.scss'
import cn from 'classnames'
import { DragDropContext } from 'react-beautiful-dnd'
import mockData from './mock'

const Board: FC = () => {

  const [mock, setMock] = useState(mockData)

  const onBeforeCapture = () => {
    /*...*/
  };

  const onBeforeDragStart = () => {
    /*...*/
  };

  const onDragStart = () => {
    /*...*/
  };
  const onDragUpdate = () => {
    /*...*/
  };
  const onDragEnd = () => {
    // the only one that is required
  };

  return (
    <section>
      <Container>
        <div className="py-4 grid grid-cols-[1fr_min-content] gap-6">
          <TextField placeholder="Поиск..." />
          <Button>Добавить</Button>
        </div>
      </Container>

      <div className={cn(styled.Row)}>
        <DragDropContext
          onBeforeCapture={onBeforeCapture}
          onBeforeDragStart={onBeforeDragStart}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <List className="flex-row gap-5 min-w-full overflow-x-auto pb-2">

            {mock.columnOrder.map(id => {
              var col = mock.columns[id]
              var tasks = col.taskIds.map(id => mock.tasks[id])

              return (
                <List.Item key={col.id}>
                  <Column
                    title="В работе"
                    tasks={tasks}
                  />
                </List.Item>
              )
            })}

            {/* <List.Item>
              <Column title="Черновик" />
            </List.Item>

            <List.Item>
              <Column title="В работе" />
            </List.Item>

            <List.Item>
              <Column title="Завершена" />
            </List.Item>

            <List.Item>
              <Column title="Тестирование" />
            </List.Item>

            <List.Item>
              <Column title="Выполнена" />
            </List.Item>

            <List.Item>
              <Column title="Закрыта" />
            </List.Item>

            <List.Item>
              <Column title="Удалена" />
            </List.Item> */}
          </List>
        </DragDropContext>
      </div>
    </section>
  )
}

export default Board
