import { FC } from 'react';
import { TypeProps } from './type';

import * as SC from './styled';

const TextField: FC<TypeProps> = (props) => {

  const {
    onChange,
    value,
    disabled,
    isError,
    errorText,
    $variant = 'outlined',
    prependIcon,
    appendIcon,
    $sx,
    ...restProps
  } = props

  return (
    <SC.TextField
      $sx={$sx}
      $variant={$variant}
      disabled={disabled}
    >
      {prependIcon ? (
        <SC.PrependIcon>
          { prependIcon }
        </SC.PrependIcon>
      ) : null}

      <SC.Input
          value={value}
          onChange={onChange}
          isError={isError}
          disabled={disabled}
          { ...restProps }
        />

      {isError ? (
        <SC.InvalidText>
          { errorText }
        </SC.InvalidText>
      ) : (
        null
      )}

      {appendIcon ? (
        <SC.AppendIcon>
          { appendIcon }
        </SC.AppendIcon>
      ) : null}
    </SC.TextField>
  );
};

export default TextField;
