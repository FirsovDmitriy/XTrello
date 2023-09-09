import { useState, useRef, FC, useEffect } from 'react';
import useOutside from '../../hooks/useOutside';
import { IProps, Option } from './type';
import DoneIcon from '../../Icons/DoneIcon';
import ArrowDownIcon from '../../Icons/ArrowDownIcon';

import * as ST from './styled';
import TextField from '../TextField';
import SearchIcon from '../../Icons/SearchIcon';

const Select: FC<IProps> = ({
  onChange,
  value,
  multiple,
  placeholder,
  options,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutside(ref, handleClose);
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Option[]>([])

  function handleClose() {
    setIsShow(false);
  }

  function handleChange(option: string) {
    if (multiple) {
      const isOptionIncluded = value?.includes(option);
      if (isOptionIncluded)
        onChange?.((value as string[]).filter((item) => item !== option));
      else {
        onChange?.([...(value as string[]), option]);
      }
    } else onChange?.(option);
    setIsShow(false);
  }

  function isOptionSelected(option: string): boolean {
    if (multiple) {
      return value?.includes(option) ?? false;
    } else {
      return option === value;
    }
  }

  function formatValueToString(): string {
    return Array.isArray(value) ? value.join(', ') : value;
  }

  useEffect(() => {
    const filteredOut = options.filter(({ label }) => {
      return label.includes(searchQuery)
    })
    setFilteredData(filteredOut)
  }, [searchQuery, options])

  return (
    <ST.Select ref={ref}>
      <ST.Base onClick={() => setIsShow(!isShow)} $isShow={isShow}>
        <ST.Content>{formatValueToString() || placeholder}</ST.Content>
        <ST.Arrow $isShow={isShow}>
          <ArrowDownIcon />
        </ST.Arrow>
        <ST.NativeInput value={formatValueToString()} />
      </ST.Base>

      <ST.Container $isShow={isShow}>
        <div>
          <TextField
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(event.target.value);
            }}
            Icon={{
              append: <SearchIcon />,
            }}
            placeholder='Поиск...'
          />
        </div>

        {filteredData.length ? (
          <ST.List>
            {filteredData.map((option) => (
              <ST.Item
                role='option'
                onClick={() => handleChange(option.value)}
                $disabled={option?.disabled}
                key={option.value}
              >
                {option.label}
                {isOptionSelected(option.value) && <DoneIcon />}
              </ST.Item>
            ))}
          </ST.List>
        ) : (
          <ST.NotFound>Not found</ST.NotFound>
        )}
      </ST.Container>
    </ST.Select>
  );
};

export default Select;
