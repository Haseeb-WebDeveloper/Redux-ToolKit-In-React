import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todos';

function App() {
  return (
    <>
    <h1 className='text-white text-center text-3xl font-semibold mt-8'>Learning Redux ToolKit In React</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
