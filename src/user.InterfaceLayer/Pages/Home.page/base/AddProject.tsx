import { FC, useState, FormEventHandler } from 'react';
import Button from '../../../UI-Kit/UI.components/Button';
import Variant from '../../../UI-Kit/UI.components/Button/enum';
import Modal from '../../../UI-Kit/UI.components/Modal';
import TextField from '../../../UI-Kit/UI.components/TextField';

import { FormLabel, FormRow, FormRequired } from './styled'

const AddProject: FC = () => {

  const [open, setOpen] = useState<boolean>(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <Button 
        variant={Variant.GHOST} 
        onClick={() => setOpen(true)}
      >
        Добавить
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Heading>Добавить проект</Modal.Heading>
        <form onSubmit={ handleSubmit }>
          <Modal.Body>
            <FormRow>
              <FormLabel>
                Код
                <FormRequired>*</FormRequired>
              </FormLabel>
              <TextField placeholder='Введите текст...' />
            </FormRow>
            <FormRow>
              <FormLabel>
                Название 
                <FormRequired>*</FormRequired>
              </FormLabel>
              <TextField placeholder='Введите текст...' />
            </FormRow>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant={Variant.GHOST}
              onClick={() => setOpen(false)}
            >
              Отмена
            </Button>
            <Button>
              Добавить проект
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddProject;
