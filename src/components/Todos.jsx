import React from 'react' // Importing React for building the component
import { useSelector, useDispatch } from 'react-redux' // Importing useSelector and useDispatch from 'react-redux' for state management
import { removeTodo } from '../Features/todo/todoSlice' // Importing the removeTodo action from the todoSlice

// Defining the Todo component
function Todo() {
    // Using useSelector to get the todos from the state
    const todos = useSelector((state) => state.todo.todo)  // Corrected path to access the todos in the state
    // Using useDispatch to get the dispatch function from the store
    const dispatch = useDispatch()

    // Defining a function to handle the removal of a todo
    const handleRemoveTodo = (id) => {
        // Dispatching the removeTodo action with the todo's id
        dispatch(removeTodo(id))
    }

    // Rendering the component
    return (
        <>
        <div className=' md:px-8 px:[12px] py-8 mx-auto grid grid-col md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-2  justify-items-start items-center'>
            {todos.map((todo) => (
                <div key={todo.id} className='min-w-full mx-auto flex items-center justify-between p-1 pl-4 gap-16 bg-zinc-700 text-white rounded-md  border border-zinc-900 shadow-sm '>
                    <span>{todo.text}</span> {/* Displaying the todo's text */}
                    <button className='bg-zinc-800 px-4 py-2 rounded-md text-[12px] border border-zinc-700' onClick={() => handleRemoveTodo(todo.id)}>Remove</button> {/* Button to remove the todo */}
                </div>
                
            ))}
            </div>
        </>
    )
}

export default Todo