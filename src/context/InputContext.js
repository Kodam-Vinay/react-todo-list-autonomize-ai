import { createContext } from "react";

const InputContext = createContext({
  inputValue: "",
  setInputValue: () => {},
});
export default InputContext;
