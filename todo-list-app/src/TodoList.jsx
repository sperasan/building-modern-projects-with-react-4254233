import NewTodoFrom from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  completedTodos,
  incompleteTodos,
  onCompleteClicked,
  onDeleteClicked,
  onCreatedClicked,
}) => {
  return (
    <>
      <h1>My Todos</h1>
      <NewTodoFrom onCreatedClicked={onCreatedClicked} />
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onCompleteClicked={onCompleteClicked}
          onDeleteClicked={onDeleteClicked}
        />
      ))}
      <br />
      <h3>Incomplete</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onCompleteClicked={onCompleteClicked}
          onDeleteClicked={onDeleteClicked}
        />
      ))}
    </>
  );
};

export default TodoList;
