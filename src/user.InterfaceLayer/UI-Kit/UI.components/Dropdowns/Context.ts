import { createContext } from "react";

type ContextType = {
  onClose: () => void
}

export const Context = createContext<ContextType>({
  onClose: () => {}
})
