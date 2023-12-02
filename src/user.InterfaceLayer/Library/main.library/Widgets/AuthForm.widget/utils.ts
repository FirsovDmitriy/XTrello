import { EMAIL_REGULAR_EXPRESSION } from './constant'

export const validateEmail = (email: string): boolean => {
  var match = String(email)
    .toLowerCase()
    .match(EMAIL_REGULAR_EXPRESSION)
  
    if(match) {
      return true
    } else return false
}
