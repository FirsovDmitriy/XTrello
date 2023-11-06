import { FC } from 'react';
import { TypeProps } from './type';

import * as SC from './styled';

const TextField: FC<TypeProps> = (props) => {

  const {
    onChange,
    value,
    Icon,
    disabled,
    isError,
    errorText,
    ...restProps
  } = props

  return (
    <SC.TextField
      $disabled={disabled}
    >
      {Icon?.prepend ? (
        <SC.IconPrepend>
          { Icon.prepend }
        </SC.IconPrepend>
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

      {Icon?.append ? (
        <SC.IconAppend>
          { Icon.append }
        </SC.IconAppend>
      ) : null}
    </SC.TextField>
  );
};

export default TextField;
