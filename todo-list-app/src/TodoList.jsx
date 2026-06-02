import { useSelector } from "react-redux";
import NewTodoFrom from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  return (
    <>
      <h1>My Todos</h1>
      <NewTodoFrom />
      <h3>Completed:</h3>
      {todos.map((todo, index) => {
        if (todo.isCompleted) {
          return <TodoListItem key={index} todo={todo} />;
        }
      })}
      <br />
      <h3>Incomplete</h3>
      {todos.map((todo, index) => {
        if (!todo.isCompleted) {
          return <TodoListItem key={index} todo={todo} />;
        }
      })}
    </>
  );
};

export default TodoList;
