import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list-container">
      {todoList?.map((each) => (
        <TodoItem todo={each} key={each?.id} todoList={todoList} />
      ))}
    </div>
  );
};

export default TodoList;
