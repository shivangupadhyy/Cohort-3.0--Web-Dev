import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<ClassProgram/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
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
  return (
    <div>NEET Program for class 12 th student</div>
  )
}

export default App
