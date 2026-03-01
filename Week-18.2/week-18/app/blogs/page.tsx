import axios from "axios"
import { get } from "http"
import { title } from "process"

async function getBlogs(){
    const response  = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return response.data
}

export default async function blog(){
    const blog = await getBlogs()
    return (
        <div>
           {blog.map((blogs: ITodo)=> <Todo title= {blogs.title} completed={blogs.completed}/>)}
        </div>
    )
}

interface ITodo{
    title: string;
    completed: boolean;
}

function Todo({title , completed}: ITodo) {
    return(
        <div>
            {title} {completed ? "Done" : "Not Done"}
        </div>
    )
}