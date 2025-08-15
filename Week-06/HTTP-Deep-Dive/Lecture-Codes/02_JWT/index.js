const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [];

const JWT_SECRET = "ilove100xdevsliveclasses";

app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(users.find((user)=>  user.username === username)){
        res.json({
            message : "You are already signed up!,"
        });
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You have signup Successfully!"
    })
})

app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if(foundUser){
        const token = jwt.sign(
            {
                username: foundUser.username,
            },
            JWT_SECRET
        );

        res.json({
            token : token,
            message:" You have been signed in Succsessfully!",
        });
    }else{
        res.json({
            message: "Invalid passowrd or username"
        });
    }
});

app.get("/me", (req, res)=>{
    const token = req.headers.token;

    if(!token){
        res.json({
            message : "Token is missing!",
        });
    }

    const userDetails = jwt.verify(token, JWT_SECRET);

    const foundUser = users.find((user)=> user.username === userDetails.username);

    if(foundUser){
        return res.json({
            username : foundUser.username,
            password : foundUser.password,
        });
    }else{
        return res.json({
            message : "Invalid token!",
        })
    }
})

app.listen(3000)