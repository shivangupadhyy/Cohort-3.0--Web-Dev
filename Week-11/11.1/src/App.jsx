import { useState } from "react"

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount ( c=> c+1);
  }

  function decreaseCount(){
    setCount( c=> c-1);
  }

  return{
    count: count,
    increaseCount: increaseCount,
    decreaseCount:decreaseCount
  }
}

function App() {
 const {count, increaseCount, decreaseCount} = useCounter();
 return(
  <div>
    {count}
    <button onClick={increaseCount}>increaseCount</button>
    <button onClick={decreaseCount}>decreaseCount</button>
  </div>
 )
}

export default App
