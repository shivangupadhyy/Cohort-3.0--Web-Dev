import { useState } from "react"

function App() {
return (
  <div>
    <Light/>
  </div>
)
}

function Light(){
 const [bulbOn, setBulbOn] = useState(true); 
 let a = 1;
 //bulbOn is a prop to the bulb state component
 // bubloon , setbulbon are the props to the ToggleButtonState
  return <div>
    <LightBulb bulbOn ={bulbOn} a={a}/>
    <LightSwitch bulbOn ={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function LightBulb({bulbOn, a}){
  
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}: {a}
  </div>
}

function LightSwitch({bulbOn, setBulbOn}){

  function toggle(){
    // setBulbOn(currentState => ! currentState)
    setBulbOn(!bulbOn)
  }
  
  return <div>
    <button  onClick={toggle}>Toggle the Bulb</button>
  </div>
}

export default App
