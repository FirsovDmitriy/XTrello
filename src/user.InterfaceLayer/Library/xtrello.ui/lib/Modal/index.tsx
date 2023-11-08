/* eslint-disable react-refresh/only-export-components */
import { FC, useEffect, MouseEvent } from 'react';
import Portal from '../Portal';
import { TypeProps } from './type';
import Heading from './components/Heading';
import Body from './components/Body';
import Footer from './components/Footer';

import * as SC from './styled';

const Modal: FC<TypeProps> = ({ onClose, children, show }) => {
  const scrollbarSize =
    window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarSize}px`;
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = '0px';
    }
  }, [show]);

  return (
    <Portal>

      <SC.ModalBackdrop onClick={onClose} $show={show} />

      <SC.Modal $show={show} role='dialog'>

        <SC.ModalContainer
          onClick={(event: MouseEvent<HTMLDivElement>) =>
            event.stopPropagation()
          }
          $show={show}
        >
          {children}
        </SC.ModalContainer>
      </SC.Modal>
    </Portal>
  );
};

export default Object.assign(Modal, {
  Heading,
  Body,
  Footer,
});
