import { createContext, useContext, useState } from "react"

const BulbContext = createContext(true);
function App() {
  const [bulbOn, setBulbOn] = useState(true)
return (
  <div>
    <BulbContext.Provider value={{bulbOn: bulbOn, setBulbOn: setBulbOn}}>
    <Light/>
    </BulbContext.Provider>
  </div>
)
}

function Light(){
 
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext);
  
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"} 
  </div>
}

function LightSwitch(){
  const {bulbOn, setBulbOn} = useContext(BulbContext);
  function toggle(){
    // setBulbOn(currentState => ! currentState)
    setBulbOn(!bulbOn)
  }
  
  return <div>
    <button  onClick={toggle}>Toggle the Bulb</button>
  </div>
}

export default App
