import { createContext } from "react"
import dayjs from "dayjs"

export const DateContext = createContext<dayjs.Dayjs>(dayjs())
