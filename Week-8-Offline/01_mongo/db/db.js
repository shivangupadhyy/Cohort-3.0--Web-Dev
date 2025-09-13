const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/test-week8-app");

// Define Admin schema
const adminSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // unique ensures no duplicate usernames
    password: String
});

// Define User schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String, 
    // Keep track of courses purchased by user
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course" // links to Course collection
    }]
});

// Define Course schema
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String
});

// Create models (collections in DB)
const AdminModel = mongoose.model("Admin", adminSchema);
const UserModel = mongoose.model("User", userSchema);
const CourseModel = mongoose.model("Course", courseSchema);

// Export so routers can use them
module.exports = { AdminModel, UserModel, CourseModel };
