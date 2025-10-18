// import { useState } from "react"

import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePrev } from "../hooks/usePrev";

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


// function App(){

//   const [currentPost, setCurrentPost] = useState(1);
// const [post, setPost] = useState({});

// const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost);

// if(loading){
//   return(
//     <div>
//       Loading.....
//     </div>
//   )
// }

// return(
//   <>
//   <button onClick={()=> setCurrentPost(1)}>1</button>
//   <button onClick={()=> setCurrentPost(2)}>2</button>
//   <button onClick={()=> setCurrentPost(3)}>3</button>
//   <h2 style={{color:"green"}}> Body: {JSON.stringify(finalData.title)}</h2>
//   </>
// )

// }

// export default App;


function App(){
  const  [state, setState] = useState(0);

  const prev = usePrev(state);


  return(
    <>
    <p>{state}</p>
    <button onClick={()=> {setState ((curr)=> curr+1)}}>Click me</button>
    <p>Previous Value was {prev}</p>
    </>
  )
}

export default App;