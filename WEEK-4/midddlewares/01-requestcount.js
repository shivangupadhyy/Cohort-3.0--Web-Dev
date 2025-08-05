const  express = require('express');
const app = express();

let requestCount = 0;

app.use((req, res, next)=>{
    requestCount = requestCount+1;// Increment the request count for every incoming request
    next()// Pass control to the next middleware or route handler
})

app.get('/', (req,res)=>{
    res.status(200).json({name:'Shivang'})
})

app.post('/user', (req, res)=>{
    res.status(200).json({msg: 'Created dummpy user'});
})

app.get('/requestcount', (req, res)=>{
    res.status(200).json({requestCount});
})

app.listen(3000)