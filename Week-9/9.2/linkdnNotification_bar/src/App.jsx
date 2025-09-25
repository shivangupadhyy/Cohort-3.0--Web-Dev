function App() {
  return (
    <div>
      Hi world
      <Greeting name={' Shivang'}
      designation={' Software Developer'}
      ></Greeting>
    </div>
  )
}

function Greeting(props){
 return (
  <div>
     hi there{ props.name}
     <br/>
     designation{props.designation}
  </div>
 )
}

export default App
