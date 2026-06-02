import { useSelector } from "react-redux";
import NewTodoFrom from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todosAreLoading = useSelector(
    (state) => !state.loading.value.completed,
  );
  const todos = useSelector((state) => state.todos.value);
  return (
    <>
      <h1>My Todos</h1>
      <NewTodoFrom />
      {todosAreLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {todos.map((todo) => {
            if (todo.isCompleted) {
              return <TodoListItem key={todo.id} todo={todo} />;
            }
          })}
          <br />
          <h3>Incomplete</h3>
          {todos.map((todo) => {
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
