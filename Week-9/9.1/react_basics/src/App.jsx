// Importing React hook 'useState' from React library
import { useState } from "react";

function App() {
  // 'todos' → current state (array of todo objects)
  // 'setTodos' → function to update the state
  // Initial state has one todo object with title, description, and done status
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Hit the gym Regularly",
      done: false,
    },
  ]);

  // Function to add a new todo
  function addTodo() {
    // Alternative way to copy the existing array:
    // let newArr = [...todos];   ← Modern & cleaner way

    // Creating an empty array manually
    let newArr = [];

    // Copying all old todos into newArr using a loop
    for (let i = 0; i < todos.length; i++) {
      newArr.push(todos[i]);
    }

    // Adding a new todo to newArr
    newArr.push({
      // Reading values directly from input boxes using document.getElementById
      // (not recommended in React, but works for now)
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true, // You’re marking new todos as done automatically
    });

    // Updating the state → tells React to re-render with new list
    setTodos(newArr);
  }

  // JSX (UI code)
  return (
    <>
      <h1>Todo App</h1>

      {/* Input for Todo Title */}
      <input id="title" type="text" placeholder="Enter the Todo Title" />

      {/* Input for Todo Description */}
      <input
        id="description"
        type="text"
        placeholder="Enter the description of the title"
      />

      {/* Button to trigger addTodo function */}
      <button onClick={addTodo}>Add Todo</button>

      <br />

      {/* Displaying todos array as JSON string on screen */}
      {JSON.stringify(todos)}
    </>
  );
}

export default App;
