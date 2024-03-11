import EditLogo from "../svgs/EditLogo";
import DeleteLogo from "../svgs/DeleteLogo";
import { useContext } from "react";
import InputContext from "../context/InputContext";
import ListContext from "../context/ListContext";
import UpdateContext from "../context/UpdateContext";

const TodoItem = ({ todo, todoList }) => {
  const { setInputValue } = useContext(InputContext);
  const { setTodoList } = useContext(ListContext);
  const { setUpdateItem, updateItem } = useContext(UpdateContext);
  const onClickUpdate = () => {
    setInputValue(todo.todo);
    setUpdateItem(todo);
  };

  const onClickDelete = (id) => {
    const newList = todoList.filter((each) => each?.id !== id);
    const checkItIsUpdatedItem = id === updateItem.id;
    if (checkItIsUpdatedItem) {
      setUpdateItem({});
    }
    setTodoList(newList);
  };

  return (
    <div className="todo-item-container">
      <p>{todo.todo + " (Updated " + todo.updated + " Times)"}</p>
      <div>
        <button type="button" onClick={() => onClickUpdate(todo?.id)}>
          <EditLogo />
        </button>
        <button type="button" onClick={() => onClickDelete(todo?.id)}>
          <DeleteLogo />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
