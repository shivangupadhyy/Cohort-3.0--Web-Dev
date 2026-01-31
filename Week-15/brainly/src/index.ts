import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { random } from "./utils.js";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { useMiddleware } from "./middleware.js";
import cors from 'cors';
const app = express();
app.use(express.json());


app.post("/api/v1/signup", async(req, res) => {
    //zod validation here and , hash the password

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

app.post("/appi/v1/content",useMiddleware , async(req, res)=>{
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        userId: new mongoose.Types.ObjectId(req.userId),
        tags: []
    })

    res.json({
        message: "Content Added",
    })
})

app.get("/api/v1/content", useMiddleware, async(req, res)=>{
const userId = new mongoose.Types.ObjectId(req.userId);
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
        _id: contentId,
        userId: new mongoose.Types.ObjectId(req.userId)
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share",useMiddleware, async(req, res)=>{
    const share  = req.body.share;
    if(share){
        const existingLink = await LinkModel.findOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        });

        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash = random(10);
        await LinkModel.create({
            userId : new mongoose.Types.ObjectId(req.userId),
            hash : hash
        })

        res.json({
            hash
        })

    }else{
        await LinkModel.deleteOne({
            userId : new mongoose.Types.ObjectId(req.userId),
        })
        res.json({
            message : "Removed link"
        })
    }

})

app.get("/api/v1/brain/:shareLink", useMiddleware,async(req, res)=>{
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });

    if(!link){
        res.status(411).json({
            message: "sorry incorrect input"
        })
        return;
    }

    const content = await ContentModel.find({
        userId : link.userId
    })


    console.log(link);
    const user = await UserModel.findOne({
        _id : link.userId
    })

    if(!user){
        res.status(411).json({
            message: "user not found , error should ideally not happen"
        })
        return;
    }


    res.json({
        username : user.username,
        content: content
    })

    
})

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

