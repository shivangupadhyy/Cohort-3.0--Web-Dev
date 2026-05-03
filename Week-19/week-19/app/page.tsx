import Link from "next/link"

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      Todo Application
      <div>
      <br/>
      <Link className="text-md border m-2" href="/signin">Signin in to Todo app</Link>
      <br/>
      <Link className="text-md border m-2" href="/signup">Signup in to Todo app</Link>
      </div>
    </div>
  )
}
