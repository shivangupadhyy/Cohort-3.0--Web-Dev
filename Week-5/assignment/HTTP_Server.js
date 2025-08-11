const express = require("express");

const app = express();

//logs the method , timestamp and the url

// in express , if you want to send json Data ,
// you need to first parse the body in to json

// function middleware(req, res, next){
//     console.log(`This is the Method : ${req.method}`);
//     console.log(`This is the hostname  : ${req.hostname}`)
//     console.log(`Host is: ${req.url} `);
//     console.log(new Date());

//     next();
// }

app.use(express.json());

// app.use(middleware);


app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

app.listen(3000);