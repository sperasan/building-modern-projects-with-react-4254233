const TodoListItem = ({ todo, onCompleteClicked, onDeleteClicked }) => {
  return (
    <div>
      <p>{todo.name}</p>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => onDeleteClicked(todo.name)}>Delete Item</button>
      ) : (
        <button onClick={() => onCompleteClicked(todo.name)}>
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default TodoListItem;
