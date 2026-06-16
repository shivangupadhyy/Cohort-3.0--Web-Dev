"use client"
import { useRouter } from "next/navigation";
import {TextInput} from "../../../packages/ui/src/text-input";

export default function Home(){
  const router = useRouter();


  return(
    <div style={{
      height: "100vh",
      width : "100vw",
      background:"black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <TextInput size="small" placeholder= "Room name"></TextInput>
        <button onClick={()=>{
          router.push("/chat/123")
        }}>Join room</button>

      </div>

    </div>
  )
}