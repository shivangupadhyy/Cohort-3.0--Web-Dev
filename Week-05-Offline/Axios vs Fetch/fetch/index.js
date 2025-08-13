// GET request using Fetch API
// Function to fetch data using Fetch API - Promise version

// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error))
// }

// getData()

// async function main() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     const todo = await response.json()
//     console.log(todo)
//    } catch (error) {
//     console.error(error)
//    }
// }

// main()

// POST request using Fetch API
// Function to post data using Fetch API - Promise version

function postData1(){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",// Specify the method as post
        body: JSON.stringify({
            title: "Hi",
            body: "bar",
            userId: 1,
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8",//set contetn type
            "authorization": "Bearer my token",
        },
    })
    .then(Response => Response.json())
    .then(json =>console.log(json))
    .catch(error => console.error(error))
}

postData1()