const express = require("express");
const jwt = require('jsonwebtoken');
const zod = require('zod');
const {UserModel} = require('../db/db')
const JWT_SECRET = "Ilove100xdevs";
const bcrypt = require("bcrypt")

const userRouter = express.Router();

userRouter.post('/signup', async(req, res)=>{
    const requireBody = zod.object({
        email: zod.string().min(5).email(),
        password : zod.string().min(5),
    })

    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(400).json({
            message : "Invalid data Format",
            error: parsedDataWithSuccess.error,
        })
    }
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({email});

    if(user){
        return res.status(409).json({
            message : "User already exists!"
        });
    }


    const hashedPassword = await bcrypt.hash(password, 10)

    await UserModel.create({
        email,
        password : hashedPassword,
    })

    res.json({
        message: "You have been Signup Successfully!"
    })
})


