const express = require('express');
const { UserModel } = require('../db/db');
const app = express();
app.use(express.json());

const router = express.Router();


router.post('/signup', async(req, res)=>{
    const username  = req.body.username;
    const password = req.body.password;

   const existingUser = await UserModel.find({ username });

   if(existingUser){
    res.status(400).json({
        message : "You have signup already",
    })
   }

   await UserModel.create({
    username,
    password,
   })
   res.json({
    message: "You have Signup successfully!",
   })
})

router.post("/signin", (req, res)=>{
    const username  = req.body.username;
    const password = req.body.password;

    
})



app.listen(3000);
