import { FC } from 'react'
import { Link } from 'react-router-dom'
import RoutesPath from '../../../router/routesPath'
import { Draggable } from 'react-beautiful-dnd'

type TypeProps = {
  id: string
  index: number
}

const Card: FC<TypeProps> = (props) => {

  const {
    id,
    index
  } = props

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Link
          { ...provided.draggableProps }
          { ...provided.draggableProps }
          className="block w-full"
          to={RoutesPath.CARD_TASK}
        >
          <div className="w-full p-4 rounded bg-thirdColor">
            Card test, test
          </div>
        </Link>
      )}
    </Draggable>
  )
}

export default Card
