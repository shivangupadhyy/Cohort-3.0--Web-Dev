const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
console.log("Connected to db")
mongoose.connect("mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/coursera-app")

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName : String,
    lastName : String
})

const adminSchema = new Schema({
    email :{type:String, unique: true},
    password: String,
    firstName: String,
    lastName : String
})

const couresSchema = new Schema({
    title:  String,
    description : String,
    price: Number,
    imageUrl: String,
    creatorId : ObjectId
})

const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId 
})

const UserModel = mongoose.model("user", userSchema);
const AdminModel = mongoose.model("admin", adminSchema);
const CourseModel = mongoose.model("course", couresSchema);
const PurchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports ={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}