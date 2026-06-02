import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { name: "Goto store", isCompleted: true },
      { name: "New Todo", isCompleted: false },
    ],
  },
  reducers: {
    createTodo: (state, action) => {
      state.value = [
        ...state.value,
        { name: action.payload.name, isCompleted: false },
      ];
    },
    markTodoAsCompleted: (state, action) => {
      const todo = state.value.find(
        (todo) => todo.name === action.payload.name,
      );
      if (todo) {
        todo.isCompleted = true;
      }
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(
        (todo) => todo.name !== action.payload.name,
      );
    },
  },
});

export const { createTodo, markTodoAsCompleted, deleteTodo } =
  todosSlice.actions;
