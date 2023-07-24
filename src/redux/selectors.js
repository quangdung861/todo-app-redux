import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioriestySelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList.todos;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioriestySelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        if (priorities.length) {
          return (
            todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            priorities.includes(todo.priority)
          );
        } else {
          return todo.name.toLowerCase().includes(searchText.toLowerCase());
        }
      } else {
        if (priorities.length) {
          return (
            todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (status === "Completed" ? todo.completed : !todo.completed) &&
            priorities.includes(todo.priority)
          );
        } else {
          return (
            todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (status === "Completed" ? todo.completed : !todo.completed)
          );
        }
      }
    });
  }
);
