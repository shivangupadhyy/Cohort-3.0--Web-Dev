const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { AdminModel, CourseModel } = require("../db/db");

const adminRouter = express.Router();
const JWT_SECRET = "ilove100xdev";

// Zod schema for admin signup
const signupSchema = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(6)
});

//  Admin Signup
adminRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const validation = signupSchema.safeParse({ username, password });
    if (!validation.success) {
        return res.status(400).json({ message: "Invalid input!" });
    }

    const existingAdmin = await AdminModel.findOne({ username });
    if (existingAdmin) {
        return res.status(409).json({ message: "Admin already exists!" });
    }

    const newAdmin = new AdminModel({ username, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin created successfully!" });
});

//  Admin Signin
adminRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const admin = await AdminModel.findOne({ username, password });
    if (!admin) {
        return res.status(401).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign({ id: admin._id }, JWT_SECRET);

    res.status(200).json({ token });
});

//  Create a new course (only admin can do this)
adminRouter.post("/courses", adminMiddleware, async (req, res) => {
    const { title, description, price, imageUrl } = req.body;

    const newCourse = new CourseModel({ title, description, price, imageUrl });
    await newCourse.save();

    res.status(201).json({
        message: "Course created successfully!",
        courseId: newCourse._id
    });
});

//  Get all courses
adminRouter.get("/courses", adminMiddleware, async (req, res) => {
    const courses = await CourseModel.find({});
    res.status(200).json({ courses });
});

module.exports = adminRouter;
