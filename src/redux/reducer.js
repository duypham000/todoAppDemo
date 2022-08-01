import { combineReducers } from 'redux';
import filterReducer from '../components/Filters/FilterSlice';
import todoReducer from '../components/TodoList/TodoSlice';

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
