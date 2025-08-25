// Import the express framework for building web servers
const express = require("express");

const bcrypt = require("bcrypt");

// Import the UserModel and TodoModel from the local db.js file (Mongoose models)
const { UserModel, TodoModel } = require("./db");

// Create an Express application instance
const app = express();

// Import the jsonwebtoken library for creating and verifying JWT tokens
const jwt = require("jsonwebtoken");

// Define a secret key for signing JWT tokens
const JWT_SECRET = "ilove100xdev";

// Import mongoose for MongoDB interaction
const mongoose = require("mongoose");

// Connect to the MongoDB Atlas cluster using mongoose
mongoose.connect(
  "mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/todo-app-week-7"
);

// Use express.json() middleware to automatically parse incoming JSON requests
app.use(express.json());

// Route for user signup (registration)
app.post("/signup", async (req, res) => {
  // Extract email and password from the request body
   const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  
  try {
  // Create a new user in the database

  const hassedPassword = await bcrypt.hash(password, 5);
  console.log(hassedPassword)
  await UserModel.create({
    email: email,
    password: hassedPassword,
    name: name,
  });


  // Respond with a success message
  res.json({
    message: "you have been signUp successfully!",
  });
  } catch (error) {
    res.status(500).json({
        message: `Duplication mail id are not allowed ${error}`
    })
  }
  
});

// Route for user login (authentication)
app.post("/login", async(req, res) => {
    // Extract email and password from the request body
    const email = req.body.email;
    const password = req.body.password;

    // Find a user in the database matching the provided credentials
    const response = await UserModel.findOne({
        email: email,
    })

    if(!response){
        res.status(403).json({
            message: "user does not exist inout db"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, response.password)

    // Log the response for debugging
    console.log(response)

    // If user is found, generate a JWT token and respond with it
    if(passwordMatch){
        const token = jwt.sign({
            id:response._id.toString()
        }, JWT_SECRET)
        res.json({
            token: token,
            message: "you have Login successfully!"
        })
    }else{
        // If user is not found, respond with an error
        res.status(403).json({
            message: " invalid creds"
        })
    }
});

// Middleware function to authenticate requests using JWT
function auth(req, res, next){
    // Get the token from the request headers
    const token = req.headers.token;

    // Verify the token using the secret key
    const response = jwt.verify(token, JWT_SECRET);

    // If token is valid, attach userId to the request and proceed
    if(response){
        req.userId = response.id;
        next();
    }else{
        // If token is invalid, respond with an error
        res.status(403).json({
            message: "invalid creds"
        })
    }
}

// Route to create a new todo item (requires authentication)
app.post("/todo", auth,async(req, res) => {
    // Get the authenticated user's ID from the request
    const userId = req.userId;
    // Get the todo title and done status from the request body
    const title = req.body.title;
    const done = req.body.done;

    // Create a new todo in the database
    await TodoModel.create({
        userId,
        title,
        done
    })

    // Respond with a success message
    res.json({
        message: "Todo have been created"
    })
});

// Route to get all todos for the authenticated user
app.get("/todos",auth,async (req, res) => {
    // Get the authenticated user's ID from the request
    const userId = req.userId;
    // Find todos in the database for this user
    const todos = await TodoModel.findOne({
        userId
    })
    // Respond with the todos
    res.json({
        todos
    })
});

// Start the Express server on port 3000
app.listen(3000);
