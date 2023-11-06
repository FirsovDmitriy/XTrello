# Modal

## Usage

``` tsx
<Modal
  open={ openModal }
  onClose={() => setModal(false)}
>
  <Modal.Heading>
    Heading
  </Modal.Heading>
  <Modal.Body>
    Body
  </Modal.Body>
  <Modal.Footer>
    Footer
  </Modal.Footer>
</Modal>
```

## Slots

- Modal.Header
- Modal.Body
- Modal.Footer

Slots are not exported. It are already included in component Modal