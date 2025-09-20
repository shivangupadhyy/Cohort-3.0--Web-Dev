import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)

  function onClickHandler(){
    setCount(count + 1);
  }

  return (
   <>
   <button id="btn"  onClick={onClickHandler}> Counter {count}</button>
   </>
  )
}

export default App
