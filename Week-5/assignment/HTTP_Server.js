const express = require('express');
const app = express();

let requestCount = 0
function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    req.name = "Shivangwgg"
    console.log(`Total number of request = ${requestCount}`)
    next();
}



// app.use((req, res, next)=>{
//     let requestCount;
//     requestCount = requestCount + 1;
//     console.log(`Total number of request = ${requestCount}`)
//     next();

// })

app.get('/sum',requestIncreaser, (req, res)=>{
    // console.log(req.name)
    const a = parseInt(req.query.a);
    const b = parseInt( req.query.b);

    res.json({
        ans: a + b
    })
    
})
app.get('/multipy', requestIncreaser, (req, res)=>{
    //  requestCount = requestCount + 1;
    // console.log(`Total number of requests = ${requestCount}`)
    const a = req.query.a;
    const b = req.query.b;
    console.log(req.name)

    res.json({
        ans: a * b
    })
})
app.get('/divide', (req, res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans : a/b
    })
})
app.get('/subtract', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:  a-b
    })
})

app.get('/add/:firstArg/:secondArg', (req, res)=>{
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);

    res.json({
        ans : a + b
    })
})

app.listen(3000)