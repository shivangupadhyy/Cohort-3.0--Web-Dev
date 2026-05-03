"use client"
import axios from "axios";
// import { useEffect, useState } from "react";

export default async function User() {  
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch(()=>{
  //     setError("Failed to load users.");
  //   })
  //   .finally(()=>{
  //     setLoading(false);
  //   })
  // },[])

  // if(loading){
  //   return (
  //     <div style={{padding:"24px"}}>
  //       loading...
  //     </div>
  //   )
  // }

  // if(error){
  //   return (
  //     <div style={{padding:"24px", color:"crimson"}}>
  //       {error}
  //     </div>
  //   )
  // }


  const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");

  await new Promise((resolve)=>setTimeout(resolve, 2000));

  const data = response.data;

  return (
    // <div style={{display:"flex", flexDirection:"column", gap:"10px", padding:"24px", color:"#111827"}}>
    //   <h1>User list</h1>
    //   {data.map((user:any)=>(
    //     <div key={user.id} style={{padding:"12px", border:"1px solid #d1d5db", borderRadius:"8px"}}>
    //       <div>{user.name}</div>
    //       <div>{user.email}</div> 
    //     </div>
    //   ))}
    // </div>

    <div>
      User Page
      {data.name}
      {data.email}
    </div>
  )
}
