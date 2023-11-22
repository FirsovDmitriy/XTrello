import { FC } from 'react'
import Typography from '../../../../Library/main.library/UI-Kit/Typography'
import List from '../../../../Library/main.library/UI-Kit/List'
import Card from '../Card'
import { TypeProps } from './type'
import { Droppable } from 'react-beautiful-dnd'

const Column: FC<TypeProps> = (props) => {
  var { title, tasks } = props

  return (
    <Droppable droppableId='4'>
      {() => (
        <div className="w-[284px] p-4 rounded bg-secondaryColor">
          <Typography variant="body2" className="font-semibold mb-2 uppercase">
            {title}
          </Typography>
          <List className='flex-col gap-2'>
            {tasks.map((_, index) => (
              <List.Item className="w-full" key={index}>
                <Card id="1" index={1} />
              </List.Item>
            ))}
          </List>
        </div>
      )}
    </Droppable>
  )
}

export default Column
