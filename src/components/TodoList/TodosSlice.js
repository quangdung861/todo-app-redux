const initState = [
  { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "learn Redux", completed: true, priority: "High" },
  { id: 3, name: "learn Javascript", completed: false, priority: "Low" },
];
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      const data = action.payload;
      return [...state, data];
    }
    case "todoList/editCompleted": {
      const { id, data } = action.payload;
      const todoIndex = [...state].findIndex((item) => item.id === id);
      if (todoIndex !== -1) {
        console.log(id, data);
        const newTodoList = [...state];

        newTodoList.splice(todoIndex, 1, {
          ...newTodoList[todoIndex],
          completed: data,
        });
        return [...newTodoList];
      } else {
        return [...state];
      }
    }
    default:
      return state;
  }
};
export default todoListReducer;
