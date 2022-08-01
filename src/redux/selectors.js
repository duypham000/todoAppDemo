import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.complete : !todo.complete) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  },
);
