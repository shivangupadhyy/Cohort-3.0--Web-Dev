import Button from "./components/Button";

export default function App() {
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-5 bg-green-300 rounded-full text-center">
        hi
      </div>
      <div className="col-span-12 sm:col-span-5 bg-red-300">
        hello
      </div>
      <div className="col-span-12 sm:col-span-2 bg-blue-300">
        world
      </div>
      <Button>Sign Up</Button>
    </div>
    </>
  )
}