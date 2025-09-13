const express = require("express");
const zod = require('zod');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilove100xdev";
const {AdminModel, CourseModel} = require('../db/db');
const bcrypt = require('bcrypt');
const adminMiddleware = require("../middleware/adminMiddleware");
const app = express();
app.use(express.json());

const adminRouter = express.Router();

adminRouter.post('/signup',async(req, res)=>{
    const requireBody = zod.object({
        email:zod.string().email(),
        password: zod.string().min(5)
    })

    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(400).json({
            message: "Invalid data Format",
            error : parsedDataWithSuccess.error,
        })
    }

    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await AdminModel.create({
            email,
            password: hashedPassword,
           
        })
    }catch{
        return res.status(400).json({
            message: "You have alraday Singup successfully",
        })
    }

    res.status(201).json({
        message: "You have signup Successfully",
    })
})

adminRouter.post('/signin', async(req, res)=>{
    const requireBody = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5)
    })

    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(400).json({
            message: "Invalid Data format",
            error: parsedDataWithSuccess.error,
        })
    }

    const email = req.body.email;
    const password = req.body.password;

    const user = await AdminModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "admin not found",
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id,
        }, JWT_SECRET)

        res.json({
            token: token,
            message: "You have been signin successfully!"
        })
    }else{
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

})


adminRouter.post('/course', adminMiddleware ,async(req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

   const newCourse = await CourseModel.create({
        title,
        description,
        imageUrl,
        price
    })

     res.status(201).json({
        message: "Course Created Successfully!",
        course : newCourse._id
    })
})

adminRouter.get('/courses', adminMiddleware, async(req, res)=>{
    const response  = await CourseModel.find({})

    res.status(201).json({
        courses:  response,
    })
})


module.exports  = adminRouter;