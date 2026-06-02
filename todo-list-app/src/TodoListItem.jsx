import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./thunks";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{todo.name}</p>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default TodoListItem;
