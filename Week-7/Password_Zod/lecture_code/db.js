// db.js

const mongoose = require('mongoose');

// Create a new Mongoose Schema instance
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define the User schema
const User = new Schema({
    email: {type: String, unique: true}, // email must be unique
    password: String, // hashed password
    name: String, // user's name
})

// Define the Todo schema
const Todo = new Schema({
    title: String, // todo title
    done: Boolean, // completion status
    userId: ObjectId, // reference to the user who created the todo
    createAt: {type: Date, default: Date.now}, // creation timestamp
    deadline: {type: Date}, // optional deadline
})

// Create Mongoose models for User and Todo
const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

// Export the models for use in other files
module.exports = {
    UserModel,
    TodoModel,
}