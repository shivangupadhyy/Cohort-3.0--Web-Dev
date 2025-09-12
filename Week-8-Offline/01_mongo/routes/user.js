const express = require('express');
const { UserModel } = require('../db/db');
const zod = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { model } = require('mongoose');
const JWT_SECRET = "ilove100xdev"
const app = express();
app.use(express.json());

const userRouter = express.Router();


userRouter.post('/signup', async(req, res)=>{

    const requireBody = zod.object({
        username : zod.string().min(5),
        password : zod.string().min(5),
    })

    const paresDataWithSuccess = requireBody.safeParse(req.body);

    if(!paresDataWithSuccess.success){
        res.json({
            message: "Invalid credentails",
            error : paresDataWithSuccess.error,
        })
    }
    const username  = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10)

   try {
    await UserModel.create({
    username,
    password : hashedPassword,
   })
    } catch (error) {
    return res.status(400).json({
        message : "You have already signup!"
    })
   }

   res.status(200).json({
    message: "You have signedUp successfully!"
   })
   
})

userRouter.post("/signin", async(req, res)=>{

    const requireBody = zod.object({
        username : zod.string().min(3),
        password : zod.string().min(5),
    })

    const paresDataWithSuccess = requireBody.safeParse(req.body);
    if(!paresDataWithSuccess.success){
        return res.status(400).json({
            message : "invalid Data format",
            error : paresDataWithSuccess.error,
        })
    }
    const username  = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({username})
    console.log(user)
    if(!user){
        return res.status(403).json({
            message: "Invalid credentials!"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id : user.username
        }, JWT_SECRET)
    

   res.status(200).json({
    token: token,
    message: "You have been signin successfully!",
   })
   }else{
    return res.status(403).json({
        message: "invalid credentails",
    })
   }
})

module.exports = userRouter;
