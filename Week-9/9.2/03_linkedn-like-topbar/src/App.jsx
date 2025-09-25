import { useState } from "react"

function App() {

  const [ currentTab, setCurrentTab] = useState()
  return (
    <div>
      <button onClick={function (){
        setCurrentTab("feed")
      }} style={{color: currentTab == "feed" ? "red" : "black"}}>Feed</button>
      <button onClick={function(){
        setCurrentTab("notifications")
      }} style={{color: currentTab == "notifications" ? "red" : "black"}}>Notification</button>
      <button onClick={function(){
        setCurrentTab("messages")
      }} style={{color: currentTab == "messages" ? "red" : "black"}}>Message</button>
      <button onClick={function(){
        setCurrentTab("jobs")
      }} style={{color: currentTab == "jobs" ? "red" : "black"}}>Jobs</button>
    </div>
  )
}

export default App
