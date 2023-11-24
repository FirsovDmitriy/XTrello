import { FC, useState } from 'react'
import TextField from '../../../Library/main.library/UI-Kit/TextField'
import Container from '../../../Library/main.library/UI-Kit/Container'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import List from '../../../Library/main.library/UI-Kit/List'
import Column from './Column'
import styled from './styled.module.scss'
import cn from 'classnames'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import mockData from './mock'
import { IInitialData } from './type'

const Board: FC = () => {

  const [mock, setMock] = useState<IInitialData>(mockData)

  var onDragStart = () => {
    /*...*/
  };
  var onDragUpdate = () => {
    /*...*/
  }

  var onDragEnd = (result: DropResult): void => {
    const { source, destination, draggableId } = result

    if(!destination) return

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    let col = mock.columns[source.droppableId]
    var clonedTaskIDs = Array.from(col.taskIDs)
    clonedTaskIDs.splice(source.index, 1)
    clonedTaskIDs.splice(destination.index, 0, draggableId)

    var newCol = {
      ...col,
      taskIDs: clonedTaskIDs
    }

    setMock({
      ...mock,
      columns: {
        ...mock.columns,
        [newCol.id]: newCol
      }
    })
  }

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
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <List className="flex-row gap-5 min-w-full overflow-x-auto pb-2">

            {mock.columnOrder.map(colID => {
              // debugger
              var col = mock.columns[colID]
              var tasks = col.taskIDs.map((id: string) => (
                mock.tasks[id]
              ))

              return (
                <List.Item key={col.id}>
                  <Column
                    title={col.title}
                    id={colID}
                    tasks={tasks}
                  />
                </List.Item>
              )
            })}

          </List>
        </DragDropContext>
      </div>
    </section>
  )
}

export default Board
