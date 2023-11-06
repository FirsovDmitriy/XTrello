# Dropdowns

## Usage

``` tsx
<Button
  onClick={handleClick}
  aria-controls="menu"
  aria-haspopup="true"
>
  Click me
</Button>
<Dropdowns
  onClose={handleClose}
  open={open}
  anchorEl={anchorEl}
>
  <Dropdowns.Elm>
    <a href="#">
      Item 1
    </a>
  </Dropdowns.Elm>
  <Dropdowns.Elm>
    <a href="#">
      Item 2
    </a>
  </Dropdowns.Elm>
  <Dropdowns.Elm>
    <a href="#">
      Item 3
    </a>
  </Dropdowns.Elm>
  <Dropdowns.Elm>
    <a href="#">
      Item 4
    </a>
  </Dropdowns.Elm>
</Dropdowns>
```

## Anchor

``` tsx
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget)
}
```
