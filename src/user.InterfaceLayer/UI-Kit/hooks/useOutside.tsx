import { useEffect, RefObject } from 'react';

type func = () => void

const useOutside = (ref: RefObject<HTMLElement>, handler: func) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useOutside;
