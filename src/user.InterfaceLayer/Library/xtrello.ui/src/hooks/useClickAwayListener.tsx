import { useEffect, RefObject } from 'react';

type func = () => void

const useClickAwayListener = (ref: RefObject<HTMLElement>, handler: func) => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [ref, handler]);
};

export default useClickAwayListener;
