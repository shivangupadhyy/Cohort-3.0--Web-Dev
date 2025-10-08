// import { createContext, useContext, useState } from "react"

// const BulbContext = createContext(true);
// function App() {
//   const [bulbOn, setBulbOn] = useState(true)
// return (
//   <div>
//     <BulbContext.Provider value={{bulbOn: bulbOn, setBulbOn: setBulbOn}}>
//     <Light/>
//     </BulbContext.Provider>
//   </div>
// )
// }

// function Light(){
 
//   return <div>
//     <LightBulb />
//     <LightSwitch />
//   </div>
// }

// function LightBulb(){
//   const {bulbOn} = useContext(BulbContext);
  
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"} 
//   </div>
// }

// function LightSwitch(){
//   const {bulbOn, setBulbOn} = useContext(BulbContext);
//   function toggle(){
//     // setBulbOn(currentState => ! currentState)
//     setBulbOn(!bulbOn)
//   }
  
//   return <div>
//     <button  onClick={toggle}>Toggle the Bulb</button>
//   </div>
// }

// export default App


import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
