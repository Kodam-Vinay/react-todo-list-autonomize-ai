import { useContext } from "react";
import InputAddButton from "./InputAddButton";
import TodoList from "./TodoList";
import ListContext from "../context/ListContext";

const Body = () => {
  const { todoList, setTodoList } = useContext(ListContext);
  return (
    <div className="body-container">
      <h1>Day Goals!</h1>
      <InputAddButton setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Body;
