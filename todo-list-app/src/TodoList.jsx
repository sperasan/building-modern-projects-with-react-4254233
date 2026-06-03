import { useSelector } from "react-redux";
import NewTodoFrom from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosAreLoading,
} from "./selectors";

const TodoList = () => {
  const todosAreLoading = useSelector(getTodosAreLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);

  return (
    <>
      <h1>My Todos</h1>
      <NewTodoFrom />
      {todosAreLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {completedTodos.map((todo) => {
            if (todo.isCompleted) {
              return <TodoListItem key={todo.id} todo={todo} />;
            }
          })}
          <br />
          <h3>Incomplete</h3>
          {incompleteTodos.map((todo) => {
            if (!todo.isCompleted) {
              return <TodoListItem key={todo.id} todo={todo} />;
            }
          })}
        </>
      )}
    </>
  );
};

export default TodoList;
