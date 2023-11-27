import { FC, SyntheticEvent, useState } from 'react'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Modal from '../../../Library/main.library/UI-Kit/Modal'
import TextField from '../../../Library/main.library/UI-Kit/TextField'

const Add: FC = () => {

  const [show, setShow] = useState(false)
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <Button
        onClick={() => setShow(true)}
      >
        Add
      </Button>

      {/*    Modal    */}
      <Modal
        show={show}
        onClose={() => setShow(false)}
        styles={{
          width: '40rem'
        }}
      >
        <Modal.Header>
          Добавить проект
        </Modal.Header>
        <form action="#" onSubmit={handleSubmit}>
          <Modal.Body>
            <label className='flex flex-col gap-2 mb-6'>
              <p>
                Код
                <span className='text-errorColor'>*</span>
              </p>
              <TextField placeholder='Enter text...'/>
            </label>
            <label className='flex flex-col gap-2'>
              <p>
                Название
                <span className='text-errorColor'>*</span>
              </p>
              <TextField placeholder='Enter text...'/>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='ghost'
              onClick={() => setShow(false)}
            >
              Отмена
            </Button>
            <Button>Добавить проект</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default Add