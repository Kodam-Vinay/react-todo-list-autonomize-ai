import { useContext, useEffect, useRef, useState } from "react";
import { v4 as uniqueId } from "uuid";
import InputContext from "../context/InputContext";
import UpdateContext from "../context/UpdateContext";
import ListContext from "../context/ListContext";

const InputAddButton = ({ setTodoList }) => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const { updateItem, setUpdateItem } = useContext(UpdateContext);
  const [inputLength, setInputLength] = useState(null);
  const { todoList } = useContext(ListContext);

  const onClickAdd = () => {
    if (!inputValue) return;
    const updatedList = todoList.map((each) => {
      if (each.id === updateItem?.id) {
        each.updated = each.updated + 1;
        each.todo = inputValue;
      }
      return each;
    });

    const addTodoToList = [
      ...todoList,
      { todo: inputValue, id: uniqueId(), updated: 0 },
    ];

    if (Object.keys(updateItem).length > 0) {
      setTodoList(updatedList);
    } else {
      setTodoList(addTodoToList);
    }
    setInputValue("");
    setUpdateItem({});
    setInputLength(null);
  };

  const onChangeInput = (e) => {
    const filterList = todoList.filter((each) => each.todo === e.target.value);
    if (filterList.length > 0) {
      setInputLength(filterList.length);
    } else {
      setInputLength(0);
    }
    setInputValue(e.target.value);
  };

  useEffect(() => {
    adjustWidth();
  }, [inputValue]);

  const adjustWidth = () => {
    document.getElementById("input").style.width =
      (inputValue.length + 8) * 8 + "px";
  };

  return (
    <form
      className="input-button-container "
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        onClick={() => {
          document.getElementById("input").focus();
        }}
      >
        <div>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={onChangeInput}
          />
        </div>
        {inputLength > 0 && <span>{inputLength}</span>}
      </div>
      <button type="submit" onClick={() => onClickAdd()}>
        Add Todo
      </button>
    </form>
  );
};

export default InputAddButton;
