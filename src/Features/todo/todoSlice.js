// Importing necessary functions from '@reduxjs/toolkit' to create a slice of state for managing todos
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Creating a slice of state for managing todos
export const todoSlice = createSlice({
    // Naming the slice 'todo'
    name: "todo",
    // Defining the initial state of the slice
    initialState: {
        // The initial state contains an array of todos with one todo item
        todo: [
            {
                // Each todo item has an id, text, and a completed status
                id: nanoid(), // Using nanoid to generate a unique id
                text: "HaseebKhan.online", // The text of the todo item
                completed: false, // The completed status of the todo item
            }
        ]
    },
    // Defining reducers for the slice
    reducers: {
        // Reducer to add a new todo item
        addTodo: (state, action) => {
            // Creating a new todo item with the action payload as the text
            const todo = {
                id: nanoid(), // Generating a unique id for the new todo
                text: action.payload, // The text of the new todo item
                completed: false, // The new todo item is not completed by default
            };
            // Adding the new todo item to the state
            state.todo.push(todo);
        },
        // Reducer to remove a todo item
        removeTodo: (state, action) => {
            // Filtering the state to remove the todo item with the id matching the action payload
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
    },
});

// Exporting the actions from the slice
export const { addTodo, removeTodo } = todoSlice.actions;
// Exporting the reducer of the slice
export default todoSlice.reducer;