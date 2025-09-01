const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

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
const AdminSchema = mongoose.model("admin", adminSchema);
const CourseModel = mongoose.model("course", couresSchema);
const PurchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports ={
    UserModel,
    AdminSchema,
    CourseModel,
    PurchaseModel
}