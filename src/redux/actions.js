// action creater
export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const toggleStatus = (todoId) => {
  return {
    type: 'todoList/toggleStatus',
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: 'filter/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: 'filter/statusFilterChange',
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: 'filter/priorityFilterChange',
    payload: priority,
  };
};
