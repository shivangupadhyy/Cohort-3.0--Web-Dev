import { useState } from "react"

function App() {
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <Counter></Counter>
      </div>
    </>
  )
}

function Counter(){
  const [ count , setCount] = useState(0);

  function increaseCount() {
   setCount(count + 1)
  }

  function decreasecount(){
    setCount(count - 1)
  }

  function resetCount (){
    setCount(0)
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>InCrease Count</button>
      <button onClick={decreasecount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  )
  
}

export default App
