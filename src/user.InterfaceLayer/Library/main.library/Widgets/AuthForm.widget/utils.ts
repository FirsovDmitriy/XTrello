import { EMAIL_REGULAR_EXPRESSION } from './constant'

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(EMAIL_REGULAR_EXPRESSION)
}
