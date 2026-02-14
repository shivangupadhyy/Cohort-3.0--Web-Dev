import { useEffect, useState } from "react"

function App() {

  const [messages, setMessage] = useState("hi there");
  useEffect(()=>{
    const ws = new WebSocket("http://localhost:3000");
    ws.onmessage = (event) => {
      setMessage(m => [...m, event.data]);
    }
    },[])

    return (  
    <>
      <div className="h-screen bg-black">
        <div className="h-[90vh]">
          {messages.map(message => <div className="bg-white text-black rounded p-4 m-8">{message}</div>)}
        </div>
        <div className='w-full bg-white flex'>
          <input className="flex-1 p-4" type="text" placeholder="Type something"></input>
          <button className="bg-purple-600 text-white p-4">Send message</button>
        </div>
      </div>
      
    </>
  )
}

export default App
