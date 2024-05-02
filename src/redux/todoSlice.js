// todoSlice.js

import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setData(state, action) {
      return action.payload;
    },
    addTodo(state, action) {
      state.push(action.payload);
    },
    updateTodo(state, action) {
      const {index, updatedTodo} = action.payload;
      state[index] = updatedTodo;
    },
    deleteTodo(state, action) {
      const index = action.payload;
      state.splice(index, 1);
    },
    completeTodo(state, action) {
      const index = action.payload;
      state[index].isCompleted = !state[index].isCompleted;
    },
  },
});

export const {setData, addTodo, updateTodo, deleteTodo, completeTodo} =
  todoSlice.actions;

export const selectData = state => state.todo;

export default todoSlice.reducer;
