const express = require('express');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomshivayu"
const app = express();

app.use(express.json());

 const user = [];

 // Create a function to generate a token for the user
function generateToken() {

    // Create an array of options for the token 
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // Create a variable to store the token
    let token = "";

    // Loop through the options array and generate a token
    for (let i = 0; i < 32; i++) {

        // Add a random character from the options array to the token
        token += options[Math.floor(Math.random() * options.length)];
    }

    // Return the token
    return token;
}

app.post('/signup',(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username : username,
        password : password
    })

    res.json({
        message : "You are signed in"
    })

    console.log(user)
})

app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = user.find(user => user.username === username && user.password === password)

    if(foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)// convert therir unsername over to a jwt
        // foundUser.token = token;
        res.json({
            token : token,
            message : "You have signed in succesfully!"
        })
    }else{
        res.status(403).send({
            message: "Invalid Username or Password"
        })
    }
    console.log(user)
})

app.get('/me', (req, res)=>{
    //get the token from the request headers
    const token  = req.headers.token;
    const decodeInfo = jwt.verify(token, JWT_SECRET);//
    // check if the token is present or not
    const username = decodeInfo.username;

    if(!token){
       return res.json({
            message: "Token not found!"
        });
    }


    const foundUser = user.find(user =>user.username === username);

    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        });
    }else{
        //send a response to the client that the token is invalid
        return res.json({
            message: "Invalid token!"
        })
    }
})


app.listen(3000);// that the ensure http server is listening on the port 3000
