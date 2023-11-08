import { createContext } from "react";

type ContextType = string

export const Context = createContext<ContextType>('')
