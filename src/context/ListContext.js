import { createContext } from "react";

const ListContext = createContext({
  todoList: [],
  setTodoList: () => {},
});
export default ListContext;
