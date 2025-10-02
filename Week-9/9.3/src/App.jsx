// import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <input type={'text'}></input>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

// export default App;


// const App = () =>{

//   const todos = [{
//     title: "5km run", 
//     description : "Run RUn RUn",
//     done : false
//   }, {
//     title: "Complete Lecture",
//     description: "By today",
//     done: true,
//   }, {
//     title: "go to Gym",
//     description:" Eat Healthy",
//     done: false
//   }];

//   const todosComponent = todos.map(todo => <Todo title={todo.title} description={todo.description} done={todo.done}></Todo>)
// return (
//   <div>
//     {todosComponent}
//   </div>
// )
// }

// function Todo({title, description, done}){
//   return <div>
//     {title} - {description} - {done ? "Done" : "Not Done!"}
//   </div>
// }


// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component mounted or count updated');

//   }, [count]); // Runs on mount and when count changes

// 	useEffect(() => {
// 		    console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
//     };
// 	}, [])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

function Card1(){
  return <div style={{backgroundColor:"red", borderRadius: 20, padding: 10, }}>
    hi there
  </div>
}
function Card2(){
return <div style={{backgroundColor: "red", borderRadius: 20, padding: 10, margin: 10}}>
  hello
</div>
}


const App = () =>{

  
  return (
   <div>
     <Card1></Card1>
     <Card2/>
   </div>
  )
}

export default App;
