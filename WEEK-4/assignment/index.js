const express = require('express')
const app = express()
const PORT = 3000;

//Middleware to parse JSON bodies
app.use(express.json());

//In-memory todo storage
let todos = [];
let nextId = 1;

//Get all the Todos
app.get('/todos', (req, res)=>{
    res.json(todos);
});

//PPOST a new todo
app.post('/todos', (req, res)=>{
const {task} = req.body;
if(!task){
    return res.status(400).json({error : "Task is Required"});
}

const newTodo = {id:nextId++, task, completed: false};
todos.push(newTodo)
res.status(201).json(newTodo)
})

//put (Update) a todo by id
app.put('/todos/:id', (req, res)=>{
    const todoId = parseInt(req.params.id);
    const {task, completed} = req.body;
    const todo = todos.find(t=> t.id === todoId);
    if(!todo){
        return res.status(404).json({error : "Todo not found"})
    }

    if(task !== undefined)todo.task = task;
    if(completed !== undefined) todo.completed = completed;
    res.json(todo)
})

//Delete atodo by ID
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== todoId);
  res.status(204).send(); // No content
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on https://localhost:${PORT}`)
})// which port 