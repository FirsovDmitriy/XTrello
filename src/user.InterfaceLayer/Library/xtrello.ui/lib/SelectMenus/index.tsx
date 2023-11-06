import { useState, useRef, FC, useEffect, ChangeEvent } from 'react';
import useClickAwayListener from '../../src/hooks/useClickAwayListener';
import { TypeProps, Option } from './type';
import TextField from '../TextField';
import SearchForm from './components/SearchForm';

import * as SC from './styled';

const SelectMenus: FC<TypeProps> = (props) => {
  const {
    onChange,
    value,
    multiple,
    placeholder,
    options,
    ...restProps
  } = props;

  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAwayListener(ref, handleClose);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Option[]>([]);

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
      return label.includes(searchQuery);
    });
    setFilteredData(filteredOut);
  }, [searchQuery, options]);

  return (
    <SC.SelectMenus ref={ref}>

      <TextField
        placeholder={placeholder}
        // onChange={onChange}
        value={formatValueToString()}
        onFocus={() => setIsShow(!isShow)}
        {...restProps}
      />

      <SC.Container $isShow={isShow}>
        {filteredData.length ? (
          <SC.List>
            {filteredData.map((option) => (
              <SC.Item
                role='option'
                onClick={() => handleChange(option.value)}
                $disabled={option?.disabled}
                key={option.value}
              >
                {option.label}
                {isOptionSelected(option.value) && (
                  <i className='icon Done-icon'></i>
                )}
              </SC.Item>
            ))}
          </SC.List>
        ) : (
          <SC.NotFound>Ничего не найдено</SC.NotFound>
        )}

        {options.length > 4 ? (

          <SearchForm
            value={searchQuery}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(event.target.value);
            }}
            type='search'
            inputMode='search'
          />
          
        ) : null}
      </SC.Container>
    </SC.SelectMenus>
  );
};

export default SelectMenus;
