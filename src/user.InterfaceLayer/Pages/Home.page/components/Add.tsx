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
        Добавить
      </Button>

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
        <form
          action="#"
          onSubmit={handleSubmit}
        >
          <Modal.Body>
            <label className='flex flex-col gap-2 mb-6'>
              <p className='font-semibold'>
                Код
                <span className='text-errorColor ml-1'>*</span>
              </p>
              <TextField placeholder='Enter text...'/>
            </label>
            <label className='flex flex-col gap-2'>
              <p className='font-semibold'>
                Название
                <span className='text-errorColor ml-1'>*</span>
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
            <Button type='submit'>Добавить</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default Add