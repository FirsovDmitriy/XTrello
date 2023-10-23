# SelectMenus

Select components are used for collecting user provided information from a list of options.

## Usage

``` tsx
<SelectMenus
  options={options}
  placeholder="Select value"
/>
```
## Multiple select

``` tsx
const [value, setValue] = React.useState<string[]>([]);

<SelectMenus
  options={options}
  placeholder="Select value"
  multiple
  value={value}
  onChange={setValue}
/>
```