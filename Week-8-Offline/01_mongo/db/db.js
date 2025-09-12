const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect("mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/coursera-app");

const adminSchema = new mongoose.Schema({
    username : {type: String, unique: true},
    password: String,
})

const userSchema = new mongoose.Schema({
    username: {type: String, uniqure: true},
    password : String,

    purchaseCourse : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
})

const couresSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageUrl : String,
    price: Number,
})

const AdminModel = mongoose.model("Admin", adminSchema);
const UserModel = mongoose.model("User", userSchema);
const CourseModel = mongoose.model("Course", couresSchema);

module.exports = {
    AdminModel,
    UserModel,
    CourseModel,
}