const express = require('express');
const { UserModel, CourseModel } = require('../db/db');
const zod = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const userMiddleware = require('../middleware/userMiddleware');
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
            id : user._id
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

userRouter.get('courses', async(req, res)=>{
    const courses = await CourseModel.find({});

    res.status(200).json({
        courses,
    })
})

userRouter.post("/courses/:courseId", userMiddleware, async(req, res)=>{
    const courseId = req.params.courseId;
    const username = req.username;

    try{
        await UserModel.updateOne({
            username : username
        },{
            $push: {
                purchasedCourses : courseId,
            }
        })
    }catch(err){
        return res.status(400).json({
            message : "Course purchase failed",
            error : err.message,
        });
    }

    res.status(200).json({
        message :" Course purchased successfully",
    })
})

userRouter.get("/purchasedCourses", userMiddleware,async(req, res)=>{
    const username = req.username;

    const user = await UserModel.findOne({
        username,
    })

    const courses = await CourseModel.find({
        _id: {
            $in: user.purchasedCourses,
        }
    })

    res.status(200).json({
        courses,
    })
})
module.exports = userRouter;
