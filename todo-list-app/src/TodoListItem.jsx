import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todosSlice.jsx";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{todo.name}</p>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo({ name: todo.name }))}>
          Delete Item
        </button>
      ) : (
        <button
          onClick={() => dispatch(markTodoAsCompleted({ name: todo.name }))}
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default TodoListItem;
