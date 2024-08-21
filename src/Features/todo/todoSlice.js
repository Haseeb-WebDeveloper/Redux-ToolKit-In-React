// Step 2:

//👉 Creating Redux Slice: A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.
//👉 Inside the Slice we have to (name, initialState, reducers) as an object.
//👉 name can by anything according to slice you are making for like Todo, Counter, Toggle.
// initialState: Here we have to describe the initial values. It can be anything {String, Num, Array, Object, Recommended( Array of object)}.
//👉 reducers: Reducer are the functions. You can create as much as required. These are the functions that will be updated by the components.
//👉 At the end we have to export all the reducer and actions



//Step 3 is in App/store.js
// Lets do the 2nd step 💫
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
                text: action.payload, // Assigning the action payload as the text of the new todo. In summary, this line is responsible for setting the text of the new todo item based on the input provided when the action is dispatched.
                completed: false, // The new todo item is not completed by default.
            };
            // Adds the new todo item to the 'todo' array in the state, modifying it directly (allowed by Redux Toolkit's Immer).
            state.todo.push(todo);
        },
        // Reducer to remove a todo item
        removeTodo: (state, action) => {
            // Removing the todo item with the specified id from the state.
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
    },
});

// Exporting the actions from the slice
export const { addTodo, removeTodo } = todoSlice.actions;
// Exporting the reducer of the slice
export default todoSlice.reducer;