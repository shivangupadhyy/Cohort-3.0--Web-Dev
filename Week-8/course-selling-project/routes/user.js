const {Router} = require('express');
const {UserModel,PurchaseModel, CourseModel} = require("../db");
const {userMiddleware} = require('../middleware/user');
const {JWT_USER_PASSWORD} = require("../config")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const zod = require('zod');

const userRouter  = Router();

userRouter.post('/signup',async (req, res)=>{
const requireBody = zod.object({
    email: zod.string().email().min(5),
    password: zod.string().min(8),
    firstName: zod.string().min(5),
    lastName : zod.string().min(3),
})

const parseDataWithSuccess = requireBody.safeParse(req.body)

if(!parseDataWithSuccess.success){
    return res.json({
        message: "Invalid Correct Format",
        error: parseDataWithSuccess.error,
    })
}

const {email, password, firstName, lastName} = req.body;

const hashedPassword = await bcrypt.hash(password, 10);
try{
    await UserModel.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
    })
}catch(error){
    return res.status(400).json({
        message: "You have been already Signup",
    })
}

res.status(201).json({
    message: "Signup Successfully!",
})
})

userRouter.post('/signin', async(req, res)=>{
    const requireBody = zod.object({
        email: zod.string().email().min(4),
        password: zod.string().min(8),
    })

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        })
    }

    const{email, password} = req.body;

    const user = await UserModel.findOne({
       email: email,
    })

    if(!user){
        return res.status(403).json({
            message: "Invalid credentials!",
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id : user._id
        }, JWT_USER_PASSWORD)

        res.status(200).json({
            token: token,
            message: "You have been signin successfully!"
        })
    }else{
        res.status(403).json({
            message: "invalid credentails",
        })
    }
})

userRouter.get('/purchases', userMiddleware,async(req, res)=>{
    const userId = req.userId;
    const purchases = await PurchaseModel.find({
        userId: userId,
    })

    if(!purchases){
        return res.status(404).json({
            message: "No purchase found",
        })
    }

    // const courseData = await CourseModel.find({
    //     _id : {$in : purchases.map(x => x.courseId)}
    // })
        const purchaseCourseInfo = purchases.map((purchase)=> purchase.courseId)


    res.json({
        purchases,
        purchaseCourseInfo,
    })


    
})

module.exports = {
    userRouter: userRouter
}   