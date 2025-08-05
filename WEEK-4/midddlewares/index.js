const express = require('express');
const app = express();
const PORT = 3000;

//function that return a boolean if the age of the person more than 14

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next()
    } else {
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {

    res.json({
        msg: "you have successfully rides the ride 1"
    })

})
app.get('/ride2',isOldEnoughMiddleware, (req, res) => {

    res.json({
        msg: "you have successfully rides the ride 2"
    })

})

app.listen(PORT);