import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { useMiddleware } from "./middleware.js";
const app = express();
app.use(express.json());

app.post("/api/v1/signup", async(req, res) => {
    //zod validation here
    const username =  req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
        username: username,
        password: password
    })

    res.json({
        message: "User signed up",
    })
    }catch(e){
        res.status(411).json({
            message : "User already Exists"
        })
    }
})

app.post("/api/v1/signin", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    }else{
        res.status(403).json({
            messsage : "Incorrect Credentials"
        })
    }
})

app.post("/appi/v1/content",useMiddleware , (req, res)=>{
    const link = req.body.link;
    const type = req.body.type;

    ContentModel.create({
        link,
        type,
        //@ts-ignore
        userid: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added";
    })
})

app.get("/api/v1/content", useMiddleware,(req, res)=>{
//@ts-ignore
const userId = req.userId;
const content = await ContentModel.find({
    userId: userId
}).populate("userId", "username")
res.json({
    content
})
})

app.delete("/api/v1/content",useMiddleware, async(req, res)=>{
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share",(req, res)=>{

})

app.get("/api/v1/brain/:shareLink", (req, res)=>{

})

app.listen(3000, () => console.log('Server running at http://localhost:3000'));