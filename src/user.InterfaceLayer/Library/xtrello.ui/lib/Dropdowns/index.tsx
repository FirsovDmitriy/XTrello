/* eslint-disable react-refresh/only-export-components */
import { FC, useEffect, useRef } from 'react';
import { TypeProps } from './type';
import { Context } from './Context';
import DropdownElm from './components/DropdownElm';

import * as SC from './styled';

const Dropdowns: FC<TypeProps> = (props) => {
  
  const {
    children,
    onClose,
    open,
    anchorEl,
    ...restProps
  } = props

  const scrollbarSize = window.innerWidth - document.documentElement.clientWidth
  const ref = useRef<HTMLDivElement>(null);
  

  function setPositioningStyles() {
    if (!(anchorEl instanceof Element)) {
      return;
    }
    const element = ref.current;
    const heightDocument = document.documentElement.clientHeight
    const h = ref.current?.getBoundingClientRect().bottom

    const diff = heightDocument - anchorEl.getBoundingClientRect().bottom
    let isDropdownBelowScreen = diff < ref.current.getBoundingClientRect().height

    const coordY = anchorEl.getBoundingClientRect().bottom
    const coordX = anchorEl.getBoundingClientRect().x;

    if (element) {
      element.style.top = `${ isDropdownBelowScreen ? (coordY - ref.current.getBoundingClientRect().height) : coordY }px`;
      element.style.left = `${ coordX }px`;
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', setPositioningStyles)
  }, [])

  useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${ scrollbarSize }px`
    } else {
      document.body.style.overflow = 'visible'
      document.body.style.paddingRight = '0px'
    }
  }, [open])

  return (
    <>
      <SC.Dropdowns
        role='menu'
        ref={ref}
        $open={open}
        { ...restProps }
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
