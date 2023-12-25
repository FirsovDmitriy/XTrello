import required from "../raw/required"

export default {
  $validator: required,
  $message: 'Поле обязательно к заполнению',
  $params: {
    type: 'required'
  }
}