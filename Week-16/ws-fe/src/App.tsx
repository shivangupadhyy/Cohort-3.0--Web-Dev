import { useEffect, useRef, useState } from "react"

function App() {

  const [socket, setSocket] = useState();
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);
  const inputRef = useRef();

  function joinRoom() {
    if(!socket || !roomId.trim()){
      alert("Please enter a room ID");
      return;
    }
    //@ts-ignore
    socket.send(JSON.stringify({
      type: "join",
      payload: {
        roomId: roomId
      }
    }));
    setJoined(true);
  }

  // This function will be called when the user clicks the "Send" button
  function sendMessage() {
    console.log("Message sent")
    if(!socket || !joined){
      alert("Please join a room first");
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(JSON.stringify({
      type: "chat",
      payload: {
        message: message
      }
    }));
    inputRef.current.value = "";
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
      <h1>Welcome to WebSocket Chat App</h1>
      <div>
        {!joined ? (
          <div>
            <input 
              type="text" 
              placeholder="Enter Room ID..." 
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
          </div>
        ) : (
          <div>
            <p>Room: <strong>{roomId}</strong></p>
            <input ref={inputRef} type="text" placeholder="Message..." />
            <button onClick={sendMessage}>Send</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
