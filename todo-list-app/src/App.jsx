import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [completedTodos, setCompletedTodo] = useState([
    { name: "activity 1", isCompleted: true },
    { name: "activity 3", isCompleted: true },
  ]);
  const [incompleteTodos, setIncompleteTodo] = useState([
    { name: "activity 2", isCompleted: false },
    { name: "activity 4", isCompleted: false },
  ]);

  const onDeleteClicked = (todoName) => {
    setCompletedTodo((prevCompletedTodos) => {
      return prevCompletedTodos.filter((todo) => todo.name != todoName);
    });
  };

  const onCompleteClicked = (todoName) => {
    setCompletedTodo([
      ...completedTodos,
      {
        ...incompleteTodos.find((todo) => todo.name == todoName),
        isCompleted: true,
      },
    ]);

    setIncompleteTodo(incompleteTodos.filter((todo) => todo.name != todoName));
  };

  const onCreatedClicked = (todoName) => {
    if (!todoName) {
      return;
    }
    setIncompleteTodo([
      ...incompleteTodos,
      { name: todoName, isCompleted: false },
    ]);
  };

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
        onCompleteClicked={onCompleteClicked}
        onDeleteClicked={onDeleteClicked}
        onCreatedClicked={onCreatedClicked}
      />
    </>
  );
}

export default App;
