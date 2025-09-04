const {Router} = require('express');
const {UserModel} = require("../db")

const userRouter  = Router();

userRouter.post('/signup', (req, res)=>{

})

userRouter.post('/login',(req, res)=>{

})

userRouter.get('/purchases', (req, res)=>{
res.json({
   
})
})

module.exports = {
    userRouter: userRouter
}   