// import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"

import { useRef } from "react";

// function App() {
//   return (
//     <div>
      
//       <BrowserRouter>
      
//         <Routes>
//          <Route path="/" element={<Layout/>}>
//           <Route path="/neet/online-coaching-class-11" element={<ClassProgram/>}/>
//           <Route path="/" element={<Landing/>}/>
//           <Route path="*" element={<ErrorPage/>}/>
//           </Route>
//         </Routes>
//         Footer | Contact Us
//       </BrowserRouter>
//     </div>
//   )
// }


// function Layout(){

  
//     const navigate = useNavigate();


//     function redirectUser(){
//       navigate('/neet/online-coaching-class-11')
//     }
//   return (
//     <div style={{height: "100vh"}}>
//       <Header/>
//     <div style={{height: "90vh", backgroundColor: "red"}}>
//       hi there
//       <button onClick={redirectUser}> Go TO Class 11 Allen Page</button>
//       <Outlet/>
//     </div>
//     </div>
//   )
// }

// function Header(){
//   return <div style={{backgroundColor: "black", marginBottom:15}}>
//     <Link to="/">Allen</Link>
//     <Link to="/neet/online-coaching-class-11"> Class 11</Link>
//     <Link to="/neet/online-coaching-class-12"> Class 12</Link>
//   </div>
// }
// function ErrorPage(){
//   return(
//     <>
//     <div>Sorry page not found</div>
//     </>
//   )
// }

// function Landing(){
//   return(
//     <div>
//       Welcome to allen
//     </div>
//   )
// }

// function ClassProgram(){
//   const navigate = useNavigate();

//   function redirectUser(){
//     navigate("/");
//   }
//   return (
//     <>
//     <div>NEET Program for class 12 th student</div>
//     <button onClick={redirectUser}>Go back to Landing page</button>
//     </>
//   )
// }

// export default App


//useRef
//Reference to a value , such that when u change the value , the component DOES NOT Re-Render

// function App(){

//   const inputRef = useRef()

//   function focusOnInput(){

//     // document.getElementById("name");
//     inputRef.current.focus();
//   }
//   return(
//     <>
//     SignUp
//     <input ref={inputRef} type="text"></input>
//     <input type="text"></input>
//     <button onClick={focusOnInput}>submit</button>
//     </>
//   )
// }

// export default App;



// function App(){
//   const inputRef = useRef();

//   const handleFocus = ()=>{
//     if (inputRef.current) inputRef.current.focus();
//   }
//   return(
//     <>
//     <input ref={inputRef} type="text" placeholder="Click the button to focus me"/>
//     <button onClick={handleFocus}>Focus the input</button>
//     </>
//   )
// }

// export default App;