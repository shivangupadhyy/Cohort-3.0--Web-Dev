const {Router} = require('express');

const adminRouter = Router();
const {AdminModel} = require("../db")

adminRouter.post('/signup',(req, res)=>{
    res.json({
        message: "SignUp successfully "
    })
})

adminRouter.post('/login',(req, res)=>{
    res.json({
        message: "Login successfully"
    })
})

adminRouter.post('/',(req, res)=>{

})

adminRouter.put('/',(req, res)=>{

})

adminRouter.get('/bulk', (req, res)=>{

})

module.exports = {
    adminRouter: adminRouter
}


