import { FC } from 'react'
import { Link } from 'react-router-dom'
import RoutesPath from '../../../router/routesPath'
import { Draggable } from 'react-beautiful-dnd'
import { ITask } from './type'
import cn from 'classnames'

type TypeProps = {
  index: number
  task: ITask
}

const Card: FC<TypeProps> = (props) => {

  const {
    index,
    task
  } = props

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Link
          className={cn("block w-full pb-2")}
          ref={provided.innerRef}
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
          to={RoutesPath.CARD_TASK}
        >
          <div className={cn("w-full p-4 rounded", snapshot.isDragging ? 'bg-primaryColor' : 'bg-thirdColor')}>
            { task.text }
          </div>
        </Link>
      )}
    </Draggable>
  )
}

export default Card
