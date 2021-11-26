import React from "react";

const TodoListItem = React.memo(({ todo, idx, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {idx + 1}. {todo.description}
      </p>
      <button
        className="btn btn-danger ms-3"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
});

export default TodoListItem;
