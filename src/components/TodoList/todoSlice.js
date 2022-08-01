import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: [
    {
      id: 1,
      name: 'Hello word',
      complete: false,
      priority: 'Medium',
    },
    {
      id: 2,
      name: 'Bello lady',
      complete: true,
      priority: 'High',
    },
    {
      id: 3,
      name: 'Pillow',
      complete: false,
      priority: 'Low',
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const curentTodo = state.find((todo) => todo.id === action.payload);
      curentTodo.complete = !curentTodo.complete;
    },
  },
});
