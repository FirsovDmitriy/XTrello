import { FC } from 'react';
import { IProps } from './type';

import * as ST from './styled';

const TextField: FC<IProps> = ({
  onChange,
  value,
  Icon,
  disabled,
  isError,
  errorText,
  ...props
}) => {
  return (
    <ST.TextField
      $disabled={disabled}
    >
      {Icon?.prepend ? (
        <ST.IconPrepend>
          { Icon.prepend }
        </ST.IconPrepend>
      ) : null}

      <ST.Input
          value={value}
          onChange={onChange}
          isError={isError}
          disabled={disabled}
          {...props}
        />

      {isError ? (
        <ST.InvalidText>
          { errorText }
        </ST.InvalidText>
      ) : (
        null
      )}

      {Icon?.append ? (
        <ST.IconAppend>
          { Icon.append }
        </ST.IconAppend>
      ) : null}
    </ST.TextField>
  );
};

export default TextField;
