import { useEffect, useState } from "react"

function App() {

  const [count, setCount] = useState(1);

   useEffect(function(){
     setInterval(()=>{
      setCount(count => count + 1)
     },1000)
  },[])

  return (
    <div>
      {count}
      {/* <button onClick={increaseCount}>Increase Count</button> */}
    </div>
  )
}

export default App
 