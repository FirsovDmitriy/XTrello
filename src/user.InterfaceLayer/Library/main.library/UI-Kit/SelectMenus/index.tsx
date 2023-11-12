import { useState, useRef, FC, useEffect, ChangeEvent } from 'react';
import useClickAwayListener from '../../src/hooks/useClickAwayListener';
import { TypeProps, Option } from './type';
import TextField from '../TextField';
import SearchForm from './components/SearchForm';

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
    <div
      className='relative'
      ref={ref}
    >
      <TextField
        $variant='outlined'
        placeholder={placeholder}
        onChange={onChange}
        value={formatValueToString()}
        onFocus={() => setIsShow(!isShow)}
        {...restProps}
      />

      <div
        className='absolute top-full left-0 rounded'
      >
        
        <SearchForm
          value={searchQuery}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
          }}
        />

        {filteredData.length 
        ? <ul>
            {filteredData.map(({ value, disabled, label }) => (
              <li
                className='p-4 cursor-pointer'
                role='option'
                onClick={() => handleChange(value)}
                // $disabled={disabled}
                key={value}
              >
                { label }
                {isOptionSelected(value) &&
                  <i className='icon Done-icon'></i> }
              </li>
            ))}
          </ul>
        : <span>Ничего не найдено</span>}
      </div>
    </div>
  );
};

export default SelectMenus;
