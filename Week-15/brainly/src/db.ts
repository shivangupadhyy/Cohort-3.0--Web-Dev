//create user model and schema
import mongoose, {model, Schema} from "mongoose";

mongoose.connect("mongooseString");

const UserSchema = new Schema({
    username : {type: String, unique: true},
    password : String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title : String,
    link : String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true},
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true, unique: true},
})

export const LinkModel = model("Link", LinkSchema);
export const contentModel = model("Content", ContentSchema);