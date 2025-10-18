import { useEffect, useState } from "react";

//  export function useFetch(){
//     const [post, setPost] = useState({});

//     async function  getPosts() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const json  = await response.json();
//         setPost(json);
//     }


//     useEffect(()=>{
//         getPosts();
//     }, [])

//     return post.title;
//  }

export function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [finalData, setFinalData] = useState({});

    async function getDetails(){
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false)
    }

    useEffect(()=>{
        getDetails();
    }, [url])

    useEffect(()=>{
        setInterval(getDetails, 10*1000)//clean up
    },[])


    return{
        finalData,
        loading
    }
}