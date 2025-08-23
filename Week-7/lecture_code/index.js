const express = require('express');
const {UserModel, TodoModel} = require("./db")
const app = express();
const jwt = require("jsonwebtoken");
const SECRET = "ilove100xdev";

app.post('/signup',async (req,res)=>{
const email = req.body.email;
const password = req.body.password;
const name = req.body.name;

await UserModel.create({
    email: email,
    password: password,
    name: name
})

res.json({
    message: "You are signed up"
})
})

app.post('/login', async(req, res)=>{
const email = req.body.email;
const password = req.body.password;

const response = await UserModel.findOne({
    email: email,
    password: password,
})

if(response){
    const token = jwt.sign({
        id: response._id.toString()
    }, SECRET)

    res.json({
        token: token,
        message: "you have been login successfully"
    })
}else{
    res.status(403).json({
        message: "incorrect creds"
    })
}

})

app.post('/todo',(req, res)=>{

})

app.get('/todos',(req, res)=>{

})

app.listen(3000)