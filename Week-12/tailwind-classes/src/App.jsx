import Button from "./components/Button";
import Type from "./components/input";

export default function App() {
  return (
    <>
    <div className="h-screen bg-blue-700">

   
      <Button disabled={true}>Sign Up</Button>
      <Type type="text" placeholder="Enter your name"></Type>
       </div>
    </>
  )
}