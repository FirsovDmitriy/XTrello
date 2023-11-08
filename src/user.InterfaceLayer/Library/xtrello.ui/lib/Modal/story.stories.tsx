import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Modal from '.';
import Button from '../Buttons';

const meta: Meta = {
  component: Modal,
  title: 'Modal',
} satisfies Meta<typeof Modal>;

export default meta;

export const Usage = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setShow(true)}>Open Modal</Button>

      <Modal show={show}>
        <Modal.Heading>Hello</Modal.Heading>
        <Modal.Body>
          Text, text, text
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShow(false)}
            variant='ghost'
          >
            Clear
          </Button>
          <Button onClick={() => console.log('Add')}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
