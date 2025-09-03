const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

import { userRouter } from './routes/user';

app.use('/user', userRouter)


 app.listen(PORT, ()=>{
    console.log(`Example app listening on port${PORT}`)
 })