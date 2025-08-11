const express  = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/sum', (req, res)=>{
    const a  = parseInt(req.body.a);
    const b = parseInt(req.body.b);


    res.json({
        ans : a + b
    })
})


app.listen(PORT);