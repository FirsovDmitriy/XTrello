import { ChangeEvent, createContext } from "react";
import { TypeProps } from "./type";

export const Context = createContext<TypeProps>({
  name: "",
  onChange: function (parametr: ChangeEvent<Element>): void {
    throw new Error("Function not implemented.");
  },
  value: ""
})
