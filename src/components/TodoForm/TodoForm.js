import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/operations';
import TodoList from 'components/TodoList/TodoList';
import { Form, Input, Button, Title, TodosContainer } from './TodoForm.styled';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (task.trim() === '') {
      return;
    }

    dispatch(addTodo(task));
    setTask('');
  };

  return (
    <TodosContainer>
      <Title>Todo List</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter your task..."
        />
        <Button type="submit">Add Task</Button>
      </Form>
      <TodoList />
    </TodosContainer>
  );
};

export default TodoForm;
