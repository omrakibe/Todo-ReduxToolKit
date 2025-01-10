import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "lectures", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: 123,
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //it is possible to direect push because of redux toolkit, no need to destructure like [...todos, newTodo]
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

//this below line is for creating object in actions according to their functions pass here
export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;