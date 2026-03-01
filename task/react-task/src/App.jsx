import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(result => setData(result))
    .catch(err=> console.log(err));
  },[])
  return (
   <div>
    {data.map(user =>{
      return <h1 key={user.id}>{user.name}</h1>
    })}
   </div>
  )
}

export default App
