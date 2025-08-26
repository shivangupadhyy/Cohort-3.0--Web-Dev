const express = require("express");
const z = require('zod')
const bcrypt = require('bcrypt')
const {UserModel, TodoModel} = require("./db")

const app = express();

app.use(express.json())

app.post('/signup',async(req,res)=>{
    const requiredBody = z.object({
        email: z.string().min(5).max(100).email(),
        Password: z.string().min(5).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        name: z.string().min(5).max(100),
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess){
        res.json({
            Message: "Incorrect Format!",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try{
        const hassedPassword = await bcrypt.hash(password, 5);
        console.log(hassedPassword);

        await UserModel.create({
            email: email,
            password: hassedPassword,
            name: name,
        })
        res.json({
            message: "You have been Signup Successfully!"
        })
    }catch(error){
        res.status(500).json({
            message: `Duplication mail id are not allowed ${error}`
        })
    }

})