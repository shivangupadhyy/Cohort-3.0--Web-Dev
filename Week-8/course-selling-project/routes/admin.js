const {Router} = require('express');

const adminRouter = Router();

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

adminRouter.post('course',(req, res)=>{

})

adminRouter.put('course',(req, res)=>{

})

adminRouter.get('/course/bulk', (req, res)=>{

})

module.exports = {
    adminRouter: adminRouter
}


