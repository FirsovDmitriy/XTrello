import { FC } from 'react'
import Typography from '../../../../Library/main.library/UI-Kit/Typography'
import Card from '../Card'
import { TypeProps } from './type'
import { Droppable } from 'react-beautiful-dnd'

const Column: FC<TypeProps> = (props) => {
  var {
    title,
    tasks,
    id
  } = props

  return (
    <div className="w-[284px] p-4 rounded bg-secondaryColor">
      <Typography 
        variant="body2" 
        className="font-semibold mb-2 uppercase"
      >
        {title}
      </Typography>

      <Droppable droppableId={id}>
        {provided => (
          <div
            ref={provided.innerRef}
            { ...provided.droppableProps }
            className="flex flex-col min-h-[4rem]"
          >
            {tasks.map((item, index) => (
              <Card
                task={item}
                index={index}
                key={item.id}             
              />
            ))}

            { provided.placeholder }

        </div>
        )}
      </Droppable>

    </div>
  )
}

export default Column
