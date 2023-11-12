import { FC } from 'react';
import { TypeProps } from './type';

const TextField: FC<TypeProps> = (props) => {

  const {
    onChange,
    value,
    disabled,
    isError,
    errorText,
    prependIcon,
    appendIcon,
    ...restProps
  } = props

  return (
    <div className='flex items-center w-full rounded border-primary border px-3 focus-within:outline outline-2 outline-offset-2 outline-primary'>
      {prependIcon ? (
        <span className='flex mr-2'>
          { prependIcon }
        </span>
      ) : null}

      <input
          className='w-full h-[2.525rem] focus-visible:outline-0 bg-transparent'
          value={value}
          onChange={onChange}
          disabled={disabled}
          { ...restProps }
        />

      {isError ? (
        <span className='absolute top-full left-0 text-error'>
          { errorText }
        </span>
      ) : (
        null
      )}

      {appendIcon ? (
        <span className='flex ml-2'>
          { appendIcon }
        </span>
      ) : null}
    </div>
  );
};

export default TextField;
