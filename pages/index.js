import React, { useState } from 'react';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IndexPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  console.log(todos);
  return (
    <Container>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </TodoList>
    </Container>
  );
};

export default IndexPage;
