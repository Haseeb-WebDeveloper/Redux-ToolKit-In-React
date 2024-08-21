// Importing necessary functions from '@reduxjs/toolkit' to configure the store
import { configureStore } from "@reduxjs/toolkit";
// Importing the todoReducer from the todoSlice file
import todoReducer from "../Features/todo/todoSlice"

// Creating the store with the todoReducer as the reducer
export const store = configureStore({
    reducer: {
        todo: todoReducer,
        
    }
})
