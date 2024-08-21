import React, { useState } from "react"; // Importing React and useState from 'react'
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux' to dispatch actions
import { addTodo } from "../Features/todo/todoSlice"; // Importing the addTodo action from the todoSlice

// Defining the AddTodo component
function AddTodo() {
    // Using useState to manage the state of the input field
    const [input, setInput] = useState("") // Initializing the input state to an empty string
    // Using useDispatch to get the dispatch function from the store
    const dispatch = useDispatch()

    // Defining a function to handle the form submission
    const addTodoHandler = (e) => {
        // Preventing the default form submission behavior
        e.preventDefault()
        // Dispatching the addTodo action with the current input value
        dispatch(addTodo(input))
        // Clearing the input field after submission
        setInput("")
    }
    // Logging the addTodo function to the console to verify it's a function
    console.log(addTodo); // Check if addTodo is a function

  return (
    <>
      <form
      className="flex md:px-8 px:[12px] pt-9 gap-4  mx-auto w-full"
      onSubmit={addTodoHandler}> {/* Form to submit new todo */}
      <input
          type="text"
          className=" todo-input bg-zinc-800 border border-zinc-900 text-white rounded-md p-2 w-full focus:outline-none "
          placeholder="Add Todo"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button
          type="submit"
          className="min-w-[100px] max-w-[120px] todo-button bg-zinc-800 border border-gray-950  text-white rounded-md p-2 focus:outline-none ">
          Add Todo {/* Button to submit the form */}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
