import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "learn Redux", completed: true, priority: "High" },
    { id: 3, name: "learn Javascript", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editCompleted: (state, action) => {
      const { id, data } = action.payload;
      const currentTodo = state.find(todo => todo.id === id);
      if (currentTodo) {
        currentTodo.completed = data;   // vân cập nhập được qua proxy ??? cần tìm hiểu
      }
    },
  },
});
