import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    removeTodo(state, action) {

    },
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodoComlete(state, action) {

    },
  },
});

export const { addTodo, removeTodo, toggleTodoComlete } = todoSlice.actions;

export default todoSlice.reducer;
