import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Link to="/">Allen</Link>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<ClassProgram/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function ErrorPage(){
  return(
    <>
    <div>Sorry page not found</div>
    </>
  )
}

function Landing(){
  return(
    <div>
      Welcome to allen
    </div>
  )
}

function ClassProgram(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }
  return (
    <>
    <div>NEET Program for class 12 th student</div>
    <button onClick={redirectUser}>Go back to Landing page</button>
    </>
  )
}

export default App
