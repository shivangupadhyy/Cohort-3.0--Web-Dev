const {Router} = require("express");
const {userMiddleware} = require('../middleware/user')
const {PurchaseModel, CourseModel} = require('../db')

const courseRouter = Router();

courseRouter.post('/purchase',userMiddleware ,async(req, res)=>{
    const userId = req.id;
    const courseId = req.body.courseId;

    await PurchaseModel.create({
        userId,
        courseId,
    })

    res.json({
        Message: "You have successfully bought the course "
    })



})

courseRouter.get('/preview', async(req, res)=>{
    const courses = CourseModel.find({})

    req.json({
        courses,
    })
})

module.exports = {
    courseRouter: courseRouter
}