const express = require("express");
const cors = require('cors');
const { getAllTodo, createTodo,  updateTodo, deleteTodoById, searchTodo}  = require('./routes/todo')
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());


let todos = [];


app.get('/todos',getAllTodo);

app.post('/todos', createTodo);

app.put('/todos/:id', updateTodo);

app.delete('/todos/:id', deleteTodoById);

app.get('/todos/search', searchTodo);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})