"use client"
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default async function User(){
//     // const [loading, setLoading] = useState(true);
//     // const [data, setData] = useState();

//     // useEffect(()=>{
//     //     axios.get("https://jsonplaceholder.typicode.com/users/1")
//     //     .then((res)=>{
//     //         setData(res.data)
//     //         setLoading(false)
//     //     })
//     // },[])

//     const response = await axios.get("http://localhost:3000/api/v1/user/details")
//     const data = response.data;

//     await new Promise(r => setTimeout(r, 5000)) // to show loading state for 5 seconds

//     console.log(" request went out")  

//     // if(loading){
//     //     return <h1>Loading..</h1>
//     // }
//     return (
//         <div>            
//            {/* user page */}
//            {data.user}
//            {data.email}
//         </div>
//     )
// }


export default function Home(){
    return (
        <div className="text-lg w-screen h-screen flex items-center justify-center">
            Todo Application
        </div>
    )
}