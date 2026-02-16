import { useEffect, useRef, useState } from "react"

function App() {

  const [messages, setMessage] = useState<string[]>(["hi there welcome to the chat app", "this is a message from the server"]);

  const wsRef = useRef<WebSocket | null>(null);
  useEffect(() => {
  const socket = new WebSocket("ws://localhost:8080");

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: "join",
      payload: {
        roomId: "room1"
      }
    }));

  };

  socket.onmessage = (event) => {
    setMessage(m => [...m, event.data]);
  };

  wsRef.current = socket;

  return () => {
    socket.close();
  };

}, []);


    return (  
    <>
      <div className="h-screen bg-black">
        <h1 className="text-4xl text-white text-center p-4">Chat App</h1>
        <br/> <br/> <br/>
        <div className="h-[85vh]">
          {messages.map(message =><div className="m-8 p-1"> 
            <span className="bg-white text-black rounded  p-4 ">{message}
            </span>
            </div>)}
        </div>
        <div className='w-full bg-white flex'>
          <input id="message" className="flex-1 p-4" type="text" placeholder="Type something"></input>
          <button onClick={()=>{
            const message = document.getElementById("message")?.value;
            wsRef.current.send(JSON.stringify({
              type: "chat",
              payload: {
                message: message
              }
            }))
          }} className="bg-purple-600 text-white p-4">Send message</button>
        </div>
      </div>
      
    </>
  )
}

export default App
