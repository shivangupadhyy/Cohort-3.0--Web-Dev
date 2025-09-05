// Import mongoose for MongoDB object modeling
const mongoose = require('mongoose');

// Get the Schema constructor from mongoose
const Schema = mongoose.Schema;

// Get the ObjectId type from mongoose (used for references)
const ObjectId = mongoose.ObjectId;

// Log to confirm DB connection attempt
console.log("Connected to db")

// Connect to your MongoDB Atlas cluster and database
mongoose.connect("mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/coursera-app")

// Define the schema for regular users
const userSchema = new Schema({
    email: {type: String, unique: true}, // unique email for each user
    password: String,                    // user's password (should be hashed in production)
    firstName : String,                  // user's first name
    lastName : String                    // user's last name
})

// Define the schema for admin users
const adminSchema = new Schema({
    email :{type:String, unique: true},  // unique email for each admin
    password: String,                    // admin's password
    firstName: String,                   // admin's first name
    lastName : String                    // admin's last name
})

// Define the schema for courses
const couresSchema = new Schema({
    title:  String,                      // course title
    description : String,                 // course description
    price: Number,                       // course price
    imageUrl: String,                    // URL to course image
    creatorId : ObjectId                 // reference to the admin who created the course
})

// Define the schema for purchases (which user bought which course)
const purchaseSchema = new Schema({
    userId : ObjectId,                   // reference to the user
    courseId : ObjectId                  // reference to the course
})

// Create Mongoose models for each schema
const UserModel = mongoose.model("user", userSchema);         // Model for users
const AdminModel = mongoose.model("admin", adminSchema);      // Model for admins
const CourseModel = mongoose.model("course", couresSchema);   // Model for courses
const PurchaseModel = mongoose.model("purchase", purchaseSchema); // Model for purchases

// Export all models so they can be used in other files
module.exports ={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}