import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filter',
  initialState: {
    search: '',
    status: 'All',
    priority: [],
  },
  reducers: {
    // tự tạo ra action creators vd:

    // export const searchFilterChange = (data) => {
    //   return {
    //     type: 'filter/searchFilterChange',
    //     payload: data,
    //   };
    // };

    searchFilterChange: (state, action) => {
      // thao tác trực tiếp (mutation)
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
