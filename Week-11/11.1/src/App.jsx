import { useState } from "react"

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount ( c=> c+1);
  }

  return{
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
 const {count, increaseCount} = useCounter();
 return(
  <div>
    {count}
    <button onClick={increaseCount}>increaseCount</button>
  </div>
 )
}

export default App
