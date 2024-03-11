import { createContext } from "react";

const UpdateContext = createContext({
  updateItem: {},
  setUpdateItem: () => {},
});
export default UpdateContext;
