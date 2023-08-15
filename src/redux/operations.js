import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d11063ff953154bb79edca.mockapi.io/';

export const fetchTodos = createAsyncThunk('task/fetchTodos', async () => {
  try {
    const response = await axios.get('/task');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addTodo = createAsyncThunk(
  'task/addTodo',
  async ({ id, task }) => {
    try {
      const todo = {
        id,
        task,
      };
      const response = await axios.post('/task', todo);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
