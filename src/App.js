import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import InputContext from "./context/InputContext";
import ListContext from "./context/ListContext";
import UpdateContext from "./context/UpdateContext";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [updateItem, setUpdateItem] = useState({});
  return (
    <InputContext.Provider
      value={{
        inputValue: inputValue,
        setInputValue: setInputValue,
      }}
    >
      <ListContext.Provider
        value={{
          setTodoList: setTodoList,
          todoList: todoList,
        }}
      >
        <UpdateContext.Provider
          value={{
            updateItem: updateItem,
            setUpdateItem: setUpdateItem,
          }}
        >
          <div className="main-container">
            <Body />
          </div>
        </UpdateContext.Provider>
      </ListContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
