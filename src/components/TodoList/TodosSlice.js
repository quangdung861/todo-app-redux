import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  reducers: {
    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // },
    // editCompleted: (state, action) => {
    //   const { id, data } = action.payload;
    //   const currentTodo = state.find((todo) => todo.id === id);
    //   if (currentTodo) {
    //     currentTodo.completed = data; // vân cập nhập được qua proxy ??? cần tìm hiểu
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "";
      })
      //
      .addCase(addNewTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.status = "idle";
      })
      .addCase(addNewTodo.rejected, (state, action) => {
        state.status = "";
      })
      //
      .addCase(editCompleted.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(editCompleted.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        state.todos = state.todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        state.status = "idle";

        // const todoIndex = state.todos.findIndex(
        //   (todo) => todo.id === action.payload.id
        // );

        // if (todoIndex !== -1) {
        //   const newTodo = state.todos.splice(todoIndex, 1, action.payload);
        //   return {
        //     ...state,
        //     todos: newTodo,
        //     status: "idle",
        //   };
        // }
      })
      .addCase(editCompleted.rejected, (state, action) => {
        state.status = "";
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

export const editCompleted = createAsyncThunk(
  "todos/editCompleted",
  async (updateTodo) => {
    const res = await fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify(updateTodo),
    });
    const data = await res.json();
    console.log("🚀 ~ file: todosSlice.js:83 ~ data:", data);

    const seen = await fetch("/api/todos");
    const seenAll = await seen.json();
    return data.todos;
  }
);

/**
 * => todos/fetchTodos/pending
 * => todos/fetchTodos/fullfilled
 * => todos/fetchTodos/rejected
 */

export default todosSlice;

// action => (object), action creators () => {return action}
// thunk action (function) va thunk action creators () => { return thunk action}

// export function addTodos(todo) {
//   // thunk function - thunk action
//   return function addTodosThunk(dispatch, getState) {
//     console.log({ todo });
//     // custom
//     todo.name = "Tung Test Updated";
//     dispatch(todosSlice.actions.addTodo(todo));

//     console.log(">>> addTodosThunk after", getState());
//   };
// }
