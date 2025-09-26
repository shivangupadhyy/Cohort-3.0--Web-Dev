import { useEffect, useState } from "react"

function App() {
  const [currentTab, setCurrentTab] = useState(1); // number
  const [tabData, setTabData] = useState({});

  useEffect(function(){
    // send a backend request to get data for this tab
    // console.log("send request to backend to get data for tab " + currentTab);
    fetch('https://jsonplaceholder.typicode.com/todos/1' + currentTab)
    .then(async res => {
      const json = await res.json();
      setCurrentTab(json);
    });

  }, [currentTab]);

  return (
    <div>
      <button onClick={() => setCurrentTab(1)} style={{color: currentTab === 1 ? "red" : "black"}}>Todo #1</button>
      <button onClick={() => setCurrentTab(2)} style={{color: currentTab === 2 ? "red" : "black"}}>Todo #2</button>
      <button onClick={() => setCurrentTab(3)} style={{color: currentTab === 3 ? "red" : "black"}}>Todo #3</button>
      <button onClick={() => setCurrentTab(4)} style={{color: currentTab === 4 ? "red" : "black"}}>Todo #4</button>

      {tabData.title}
    </div>
  )
}

export default App
