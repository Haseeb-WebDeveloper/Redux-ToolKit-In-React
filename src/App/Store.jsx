// Step 3:
//👉 Create a store.js
//👉 This file will contain all the slices we created.
//👉 We have to create a store using configureStore() from reduxjs/toolkit. 
//👉 This store will contain all the reducer that we have exported in step 2, in the form of objects.



// Lets start step 3 💫
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
