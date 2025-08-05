const express = require('express');
const app = express();
const PORT = 3000;

//function that return a boolean if the age of the person more than 14

function isOldEnough(age){
    if(age>=14){
        return true;

    }else{
        return false;
    }
}

app.get('/ride1', (req, res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
      msg:  "you have successfully rides the ride 1"
    })
    }else{
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
    
})
app.get('/ride2', (req, res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
      msg:  "you have successfully rides the ride 2"
    })
    }else{
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
    
})

app.listen(PORT);