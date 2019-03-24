import React from 'react';

const ListEntry = props => {
  const { todo, deleteTodo, updateTodo } = props;
  return (
    <div>
      <br />
      <div>Priority: {todo.priority}</div>
      {'   '}
      <div>{todo.name}</div>
      <button type="button" onClick={() => deleteTodo(todo._id)}>
        Delete Todo
      </button>
      <button type="text" onClick={() => updateTodo(props.index, 1)}>
        Increase Priority
      </button>
      <button type="text" onClick={() => updateTodo(props.index, -1)}>
        Decrease Priority
      </button>
      <br />
    </div>
  );
};

export default ListEntry;
