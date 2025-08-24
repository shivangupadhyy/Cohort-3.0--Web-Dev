const express = require('express');
const {UserModel, TodoModel} = require("./db")
const app = express();
const jwt = require("jsonwebtoken");
const { default: mongoose } = require('mongoose');
const SECRET = "ilove100xdev";
mongoose.connect("mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/shiv-todo-777")

app.use(express.json())

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
    message: "You are signed up successful!"
})
})

app.post('/login', async(req, res)=>{
const email = req.body.email;
const password = req.body.password;

const response = await UserModel.findOne({
    email: email,
    password: password,
})

console.log(response)

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

function auth(req, res, next){
    const token = req.headers.token;

    const response = jwt.verify(token, SECRET);

    if(response){
        req.userId = token.id;
        next();
    }else{
        res.status(403).json({
            message: "invalid creds"
        })
    }
}

app.post('/todo', auth, async(req, res)=>{
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        message: "Todo Created"
    })
})

app.get('/todos', auth, async(req, res)=>{
    const userId = req.userId;

    const todos = await TodoModel.findOne({
        userId
    })
    res.json({
        todos
    })
})

app.listen(3000)