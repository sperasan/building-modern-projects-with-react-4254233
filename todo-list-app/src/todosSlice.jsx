import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from "./loadingSlice";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
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
    todosUpdated: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadingCompleted, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { createTodo, markTodoAsCompleted, deleteTodo, todosUpdated } =
  todosSlice.actions;
