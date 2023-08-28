import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  width:100%;
  marginBottom:'20px';
`;

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{padding:'5px',width:'500px',height:'50px',marginTop:'15px'}}
      />
      <button type="submit" style={{padding:'8px',borderRadius:'8px',marginTop:'10px'}}>Add</button>
    </Form>
  );
};

export default TodoForm;
