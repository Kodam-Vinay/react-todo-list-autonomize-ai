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

  const inputRef = useRef(null);

  useEffect(() => {
    adjustWidth();
  }, [inputValue]);

  const adjustWidth = () => {
    if (inputRef.current) {
      const contentWidth = inputRef.current.scrollWidth;

      // Set the minimum and maximum width (optional)
      const minWidth = 50;
      const maxWidth = 500;

      // Calculate the input width based on character length
      const characterWidth = 8; // Adjust this value based on your font and styling
      const calculatedWidth = Math.max(
        minWidth,
        Math.min(contentWidth, maxWidth, characterWidth * inputValue.length)
      );

      // Set the input width
      inputRef.current.style.width = calculatedWidth + "px";
    }
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
            ref={inputRef}
            value={inputValue}
            onChange={onChangeInput}
            style={{}}
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
