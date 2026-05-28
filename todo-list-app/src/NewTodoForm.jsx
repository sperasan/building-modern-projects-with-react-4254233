import { useState } from "react";

const NewTodoFrom = ({ onCreatedClicked }) => {
  const [inputText, setInputText] = useState("");
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
          onCreatedClicked(inputText);
          setInputText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoFrom;
