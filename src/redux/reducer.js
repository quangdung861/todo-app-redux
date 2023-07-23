// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//     priority: [],
//   },
//   todoList: [
//     { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
//     { id: 2, name: "learn Redux", completed: true, priority: "Hight" },
//     { id: 3, name: "learn Javascript", completed: false, priority: "Low" },
//   ],
// };

import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
