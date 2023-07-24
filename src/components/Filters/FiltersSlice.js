import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchText: (state, action) => {
      // mutation || thực tế vẫn là immutation do @reduxjs/toolkit sử dụng 1 library tên là IMMER để chuyển đổi
      state.search = action.payload;
    }, // => {type: 'filters/searchText'}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

/**
 * => {
 *   reducer,
 *   actions,
 * }
 */

