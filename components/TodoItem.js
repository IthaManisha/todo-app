import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <Item>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} style={{marginLeft:'15px',padding:'5px'}}>Remove</button>
    </Item>
  );
};

export default TodoItem;
