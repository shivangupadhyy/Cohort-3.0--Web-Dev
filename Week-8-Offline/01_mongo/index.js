const express = require('express');
const app = express();
const userRouter = require("./routes/user");
const adminRouter = require('./routes/admin');

app.use(express.json());

app.use('/user', userRouter),
app.use('/admin', adminRouter)



app.listen(3000);