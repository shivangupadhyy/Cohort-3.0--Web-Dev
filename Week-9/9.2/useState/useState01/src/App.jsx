import { useState } from "react";

function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage></ToggleMessage>
    </div>
  )
}

  //When the value of a state variable changes,
  //the component that uses the state variable re-render

  //the component isnot re-rendering
  //because we havent used a state variable



// const ToggleMessage = () =>{
  
//   const[isvisible, setIsVisible]  = useState(true)

//   function toggle(){
//     setIsVisible(!isvisible); //false => true, true => false
//   }


const ToggleMessage = () =>{
  
  const[count, setCount]  = useState(0)

  function increment(){
    setCount(count + 1); //false => true, true => false
  }

  return (
    <div>
      <button onClick={increment}>
        increase count
      </button>
      {/* {isvisible && <p>This message is conditional rendered!</p>} */}
      {count}
    </div>
  )
}

export default App
