import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../components/Filters/filterSlice';
import todoReducer from '../components/TodoList/todoSlice';

// đã tích hợp sẵn composeWithDevTools
const store = configureStore({
  reducer: {
    filters: filterReducer.reducer,
    todoList: todoReducer.reducer,
  },
});

export default store;
