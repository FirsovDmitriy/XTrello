import { FC, useState } from 'react'
import Button from '../../../../UI-Kit/Buttons'
import Modal from '../../../../UI-Kit/Modal'

const ModalWarning: FC = () => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        variant='text'
        className='text-error'
      >
        Delete
      </Button>

      <Modal
        show={show}
        onClose={() => setShow(false)}
        styles={{
          width: '31.25rem'
        }}
      >
        <Modal.Header>Delete</Modal.Header>
        <Modal.Body>
          <p>Вы уверены что хотите удалить проект «Название»?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='ghost'>
            Cancel
          </Button>
          <Button>
            Yea
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalWarning