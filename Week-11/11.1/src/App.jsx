// import { useState } from "react"

import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount ( c=> c+1);
//   }

//   function decreaseCount(){
//     setCount( c=> c-1);
//   }

//   return{
//     count: count,
//     increaseCount: increaseCount,
//     decreaseCount:decreaseCount
//   }
// }

// function App() {
//  const {count, increaseCount, decreaseCount} = useCounter();
//  return(
//   <div>
//     {count}
//     <button onClick={increaseCount}>increaseCount</button>
//     <button onClick={decreaseCount}>decreaseCount</button>
//   </div>
//  )
// }

// export default App


function App(){

  const [currentPost, setCurrentPost] = useState(1);
const [post, setPost] = useState({});

const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost);

if(loading){
  return(
    <div>
      Loading.....
    </div>
  )
}

return(
  <>
  <button onClick={()=> setCurrentPost(1)}>1</button>
  <button onClick={()=> setCurrentPost(2)}>2</button>
  <button onClick={()=> setCurrentPost(3)}>3</button>
  <h2 style={{color:"green"}}> Body: {JSON.stringify(finalData.title)}</h2>
  </>
)

}

export default App;