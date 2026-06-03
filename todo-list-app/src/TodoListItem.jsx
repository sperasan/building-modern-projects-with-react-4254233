import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./thunks";
import styled from "styled-components";

const CardContainer = styled.div`
  ${(props) => props.important && "background-color: yellow;"}
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.75);
  padding: 16px;
`;

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer important={todo.name.endsWith("!")}>
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
    </CardContainer>
  );
};

export default TodoListItem;
