import axios from "axios";
import { useEffect, useState } from "react";

export default function User(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
    })

    if(loading){
        return <h1>Loading..</h1>
    }
    return (
        <div>            
           user page
           {data.name}
           {data.email}
        </div>
    )
}