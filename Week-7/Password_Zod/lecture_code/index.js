// index.js

// Import express for building the web server
const express = require("express");

// Import zod for request validation
const z = require('zod')

// Import bcrypt for password hashing
const bcrypt = require('bcrypt')

// Import UserModel and TodoModel from db.js (Mongoose models)
const {UserModel, TodoModel} = require("./db")

// Import jsonwebtoken for JWT authentication
const jwt = require('jsonwebtoken')

// Import mongoose for MongoDB connection
const mongoose = require('mongoose');

// Connect to MongoDB Atlas cluster
mongoose.connect("mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/todo-app")

// Define a secret key for JWT signing
const SECRET = 'ilove100xdevs'

// Create an Express app instance
const app = express();

// Use express.json() middleware to parse JSON request bodies
app.use(express.json())

// Signup route: Registers a new user
app.post('/signup',async(req,res)=>{
    // Define validation schema for signup data
    const requiredBody = z.object({
        email: z.string().min(5).max(100).email(), // must be a valid email
        password: z.string().min(5).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), // strong password
        name: z.string().min(5).max(100), // name between 5 and 100 chars
    })

    // Validate request body against schema
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    // If validation fails, send error response
    if(!parsedDataWithSuccess.success){
        res.status(400).json({
            Message: "Incorrect Format!",
            error: parsedDataWithSuccess.error
        })
        return
    }

    // Extract validated fields
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try{
        // Hash the password before storing
        const hassedPassword = await bcrypt.hash(password, 5);
        console.log(hassedPassword);

        // Create a new user in the database
        await UserModel.create({
            email: email,
            password: hassedPassword,
            name: name,
        })
        // Respond with success message
        res.json({
            message: "You have been Signup Successfully!"
        })
    }catch(error){
        // Handle duplicate email or other DB errors
        res.status(500).json({
            message: `Duplication mail id are not allowed ${error}`
        })
    }
})

// Login route: Authenticates a user and returns a JWT token
app.post('/login', async(req, res)=>{
    // Extract email and password from request
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    const response = await UserModel.findOne({
        email: email,
    })

    // If user not found, send error
    if(!response){
        res.status(403).json({
            message: "User does not exist in DB"
        })
        return
    }

    // Compare provided password with hashed password in DB
    const passwordVerified = await bcrypt.compare(password, response.password)

    if(passwordVerified){
        // If password matches, create JWT token with user id
        const token = jwt.sign({
            id:response._id.toString()
        }, SECRET)
        res.json({
            token: token,
            message: "Yoo have been Login successfully!"
        })
    }else{
        // If password does not match, send error
        res.status(403).json({
            message: "invalid creds"
        })
    }
})

// Middleware for authenticating requests using JWT
function auth(req, res, next){
    // Get token from request headers
    const token = req.headers.token;

    // Verify token using secret key
    const response = jwt.verify(token, SECRET)

    // If token is valid, attach userId to request and continue
    if(response){
        req.userId = response.id;
        next();
    }else{
        // If token is invalid, send error
        res.status(403).json({
            message : "Invalid creds"
        })
    }
}

// Route to create a new todo (requires authentication)
app.post('/todo', auth, async(req,res)=>{
    // Get userId from authenticated request
    const userId = req.userId;

    // Extract todo fields from request body
    const {title, done, deadline} = req.body;

    // Create new todo in database
    await TodoModel.create({
        userId,
        title,
        done: done || false, // default to false if not provided
        deadline,
    })

    // Respond with success message
    res.json({
        message:"Todo have been created"
    })
})

// Route to get all todos for the authenticated user
app.get('/todos', auth, async(req,res)=>{
    // Get userId from authenticated request
    const userId = req.userId;

    // Find all todos for this user
    const todos = await TodoModel.find({
        userId
    })

    // If no todos found, send message
    if(!todos){
        return res.json({
            message: "No todos found"
        })
    }

    // Respond with todos array
    res.json({todos})
})

// Route to update a todo by its id (requires authentication)
app.put("/todo/:id", auth, async(req, res)=>{
    const userId = req.userId;
    const todoId = req.params.id;
    const {title, done} = req.body;

    // Find the todo by its id and userId
    const todo = await TodoModel.findOne({
        _id: todoId,
        userId
    });

    // If todo not found, send error
    if(!todo){
        return res.status(404).json({message: "todo not found"});
    }

    // Update todo fields if provided
    todo.title = title || todo.title;
    todo.done = (done !== undefined) ? done : todo.done;

    // Save updated todo to database
    await todo.save();

    // Respond with success message
    res.json({message: "Todo updated"})
})

// Route to delete a todo by its id (requires authentication)
app.delete("/todo/:id", auth, async(req,res)=>{
    const userId = req.userId;
    const todoId = req.params.id;

    // Find the todo by its id and userId
    const todo = await TodoModel.findOne({
        _id: todoId,
        userId
    })

    // If todo not found, send error
    if(!todo){
        return res.status(404).json({
            message: "Todo not found"
        })
    }

    // Delete the todo from database
    await  TodoModel.deleteOne({
        _id:  todoId, userId
    })

    // Respond with success message
    res.json({
        message: "todo deleted"
    })
})

// Start the server on port 3000
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})


