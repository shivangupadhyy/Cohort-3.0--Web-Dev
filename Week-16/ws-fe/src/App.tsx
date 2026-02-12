import { useEffect, useRef, useState } from "react"

function App() {

  const [socket, setSocket] = useState();
  const inputRef = useRef();
  // This function will be called when the user clicks the "Send" button

  function sendMessage() {
    console.log("Message sent")
    if(!socket){
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);  

    ws.onmessage = (event) =>{
      alert(event.data)
    } 
  }, [])
  
  return (
    <>
      <h1 >Welcome to WebSocket Chat App</h1>
      <div>
        <input ref={inputRef} type="text" placeholder="Message..."></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
