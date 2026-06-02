import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./todosSlice";

const NewTodoFrom = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          const { value } = e.target;
          setInputText(value);
        }}
      />
      <button
        onClick={() => {
          dispatch(createTodo({ name: inputText }));
          setInputText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoFrom;
