import './index.css';
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      {/* Tailwind classes instead of invalid inline string */}
     <div className='max-w-md flex flex-col items-center justify-center py-8' >
       <h1 className="text-2xl font-semibold">01-StopWatch</h1>

      <div className="text-xl font-semibold py-4">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)} </span>
      </div>

      <div className="w-1/3 flex flex-row space-between">
        {/* Replace inline style with Tailwind utilities */}
        <button
          onClick={() => setRunning(true)}
          className="border border-gray-300 px-3 py-1 rounded-md bg-transparent hover:bg-gray-100 cursor-pointer"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="border border-gray-300 px-3 py-1 rounded-md bg-transparent hover:bg-gray-100"
        >
          Stop
        </button>

        <button
          onClick={() => setTime(0)}
          className="border border-gray-300 px-3 py-1 rounded-md bg-transparent hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
     </div>
    </>
  );
}

export default App;
