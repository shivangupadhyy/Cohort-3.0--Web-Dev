import { useState, useEffect } from "react"


//explain conditional renderding
function App() {
  return (
    <>
      <div>
        <Counter></Counter>
      </div>
    </>
  )
}

//mounting , re-rendering, unmounting

function Counter(){
  const [ count , setCount] = useState(0);

  console.log("Inside Counter Componennet")

  // useEffect(function(){
  //   setInterval(function(){
  //   setCount( function(count){
  //     return count +1 ;
  //   })
  // }, 1000)
  // console.log("mounted")
  // }, [])

  useEffect(function(){
    setInterval(function(){
      setCount(count => count + 1 )
    }, 1000);
  }, []) // what is dependecy array, cleanup, fetch inside use effect with examplpe explain
  

  // function increaseCount() {
  //  setCount(count + 1)
  // }

  // function decreasecount(){
  //   setCount(count - 1)
  // }

  // function resetCount (){
  //   setCount(0)
  // }


  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increaseCount}>InCrease Count</button> */}
      {/* <button onClick={decreasecount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button> */}
    </div>
  )
  
}

export default App
