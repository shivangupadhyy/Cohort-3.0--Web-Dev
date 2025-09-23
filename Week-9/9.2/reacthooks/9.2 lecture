// Importing React hooks: useState (for state) and useEffect (for side effects)
import { useState, useEffect } from "react"

// App component: The main/root component of your app
function App() {
  return (
    <>
      {/* Rendering the Counter component inside a div */}
      <div>
        <Counter />
      </div>
    </>
  )
}

// Counter component: Demonstrates state, effects, and rendering
function Counter(){
  // useState hook: Declares a state variable 'count' and a function 'setCount' to update it. Initial value is 0.
  const [ count , setCount] = useState(0);

  // This log runs every time the Counter component renders (mounts or re-renders)
  console.log("Inside Counter Component")

  // Example of useEffect with setInterval (commented out version)
  // useEffect(function(){
  //   // This sets up an interval to increment count every second
  //   setInterval(function(){
  //     setCount(function(count){
  //       return count + 1;
  //     })
  //   }, 1000)
  //   // This log runs only once when the component mounts
  //   console.log("mounted")
  // }, [])

  // useEffect hook: Runs after the component mounts (because dependency array is empty)
  useEffect(function(){
    // Sets up an interval to increment count every second
    setInterval(function(){
      setCount(count => count + 1 )
    }, 1000);
  }, []) // Dependency array: [] means this effect runs only once (on mount)
  // NOTE: No cleanup here, so multiple intervals may be created if component mounts/unmounts repeatedly (not best practice)

  // Example functions for manual count control (commented out)
  // function increaseCount() {
  //   setCount(count + 1)
  // }

  // function decreasecount(){
  //   setCount(count - 1)
  // }

  // function resetCount (){
  //   setCount(0)
  // }

  return (
    <div>
      {/* Display the current count */}
      <h1>{count}</h1>
      {/* Buttons for manual control (currently commented out) */}
      {/* <button onClick={increaseCount}>Increase Count</button> */}
      {/* <button onClick={decreasecount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button> */}
    </div>
  )
}

export default App
