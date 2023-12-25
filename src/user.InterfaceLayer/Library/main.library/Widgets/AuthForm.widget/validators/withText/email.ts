import email from "../raw/email"

export default {
  $validator: email,
  $message: 'Email невалидный',
  $params: { type: 'email' }
}