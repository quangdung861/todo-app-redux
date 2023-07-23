export const addTodoAction = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const editCompleted = (data) => {
  return {
    type: "todoList/editCompleted",
    payload: data,
  }
}

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchText",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priority) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priority,
  };
};

