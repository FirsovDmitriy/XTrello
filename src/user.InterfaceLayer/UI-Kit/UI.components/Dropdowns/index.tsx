/* eslint-disable react-refresh/only-export-components */
import { FC, useEffect, useRef } from 'react';
import { IProps } from './type';
import { Context } from './Context';
import DropdownElm from './DropdownElm';
import { useScrollbarSize } from '../../hooks/useScrollbarSize'

import * as SC from './styled';

const Dropdowns: FC<IProps> = ({
  children,
  onClose,
  open,
  anchorEl,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function setPositioningStyles() {
    if (!(anchorEl instanceof Element)) {
      return;
    }
    const element = ref.current;
    const coordY = anchorEl.getBoundingClientRect().bottom;
    const coordX = anchorEl.getBoundingClientRect().x;

    if (element) {
      element.style.top = `${ coordY }px`;
      element.style.left = `${ coordX }px`;
    }
  }

  useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden'
      // eslint-disable-next-line react-hooks/rules-of-hooks
      document.body.style.paddingRight = `${ useScrollbarSize() }px`
    } else {
      document.body.style.overflow = null
      document.body.style.paddingRight = null
    }
  }, [open])

  return (
    <>
      <SC.Dropdowns
        role='menu'
        ref={ref}
        $open={open}
        {...props}
      >
        <SC.DropdownsContent>
          <Context.Provider
            value={{ onClose }}
          >
            {children}
          </Context.Provider>
        </SC.DropdownsContent>
      </SC.Dropdowns>
      <SC.DropdownsBackdrop
        $open={open}
        onClick={onClose}
      />
    </>
  );
};

export default Object.assign(Dropdowns, {
  Elm: DropdownElm
})
