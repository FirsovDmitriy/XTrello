import { EMAIL_REGULAR_EXPRESSION } from "../../constant"

export default (str: string): boolean => (
  !EMAIL_REGULAR_EXPRESSION.test(str)
)