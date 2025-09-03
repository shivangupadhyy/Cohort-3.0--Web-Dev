const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/courses');
const { adminRouter } = require('./routes/admin');


app.use('/user', userRouter)
app.use('/course', courseRouter)
app.use('/admin', adminRouter)


 app.listen(PORT, ()=>{
    console.log(`Example app listening on port${PORT}`)
 })