const express = require("express");
const app = express();

//route handler

app.get('/', function(req, res){
    res.send('hello world')
})

app.get('/asd', function(req, res){
    res.send('hello from the asd endpoint');
})

app.listen(3000)// which port 