// Create an empty array to store todo items in memory
let todos = []; //in memory space

// Initialize a counter to assign unique IDs to each todo
let currentId = 1;// counter for unique IDs

// Function to get all todos
export async function getAllTodo(res) {
    // Respond with the entire todos array as JSON
    res.json(todos)
}

// Function to create a new todo
export async function createTodo(req, res){
    // Extract 'task' from the request body
    const {task} = req.body;
    // If 'task' is missing, send a 400 error response
    if(!task){
        return res.status(400).json({error: 'Task is required'});
    }

    // Create a new todo object with a unique ID and the task
    const newTodo = {id: currentId++, task}; //use a counter for IDs
    // Add the new todo to the todos array
    todos.push(newTodo)
    // Respond with the new todo and status 200
    res.status(200).json(newTodo);
}

// Function to update an existing todo
export async function updateTodo(req, res) {
    // Extract 'id' from URL parameters and 'task' from request body
    const {id} = req.params;
    const {task} = req.body;

    // If 'task' is missing, send a 400 error response
    if(!task){
        return res.status(400).json({ error: 'Task is required'});
    }

    // Find the index of the todo with the given id
    const todoIndex = todos.findIndex(todo =>todo.id == id);
    // If found, update the task and respond with the updated todo
    if(todoIndex !== -1){
        todos[todoIndex] = {...todos[todoIndex], task};
        res.json(todos[todoIndex]);
    }else{
        // If not found, send a 400 error response
        res.status(400).json({message : 'Todo not found'});
    }
}

// Function to delete a todo by its id
export async function deleteTodoById(req, res) {
    // Extract 'id' from URL parameters
    const {id} = req.params;
    // Find the index of the todo with the given id
    const todoIndex = todos.findIndex(todo => todo.id == id);

    // If found, remove the todo from the array and send a 204 response
    if(todoIndex !== -1){
        todos.splice(todoIndex,1)//remove todo
        res.status(204).send();
    }else{
        // If not found, send a 404 error response
        res.status(404).json({message : 'todo not found'});
    }
}

// Function to search todos by a query string
export async function searchTodo(req, res) {
    // Extract 'q' (query) from the request query parameters
    const {q} = req.query;
    // If 'q' is missing, send a 400 error response
    if(!q){
        return res.status(400).json({message : 'Query parameter missing'});
    }
    // Filter todos whose task includes the query string (case-insensitive)
    const filteredTodos = todos.filter(todo =>
        todo.task.toLowerCase().includes(q.toLowerCase())
    );
    // Respond with the filtered todos
    res.json(filteredTodos);
}