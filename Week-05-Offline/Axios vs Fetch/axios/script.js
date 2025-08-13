function getData(){
   axios.get('https://jsonplaceholder.typicode.com/todos/1')
   .then(response =>console.log(response.data))
   
}

getData()

async function main() {
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todo = await response.json()
    console.log(todo)
   } catch (error) {
    console.error(error)
   }
}

// main()