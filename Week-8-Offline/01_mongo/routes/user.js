const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod"); // ✅ input validation library
const userMiddleware = require("../middlewares/userMiddleware");
const { UserModel, CourseModel } = require("../db/db");

const userRouter = express.Router();
const JWT_SECRET = "ilove100xdev";

// Zod schema for input validation
const signupSchema = zod.object({
    username: zod.string().min(3), // at least 3 chars
    password: zod.string().min(6)  // at least 6 chars
});

//  User Signup
userRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    // Validate input with zod
    const validation = signupSchema.safeParse({ username, password });
    if (!validation.success) {
        return res.status(400).json({ message: "Invalid input!" });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists!" });
    }

    // Create new user
    const newUser = new UserModel({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
});

//  User Signin
userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username, password });
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create JWT token containing user._id
    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.status(200).json({ token });
});

//  Get all available courses
userRouter.get("/courses", async (req, res) => {
    const courses = await CourseModel.find({});
    res.status(200).json({ courses });
});

//  Purchase a course (protected route)
userRouter.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;

    try {
        await UserModel.updateOne(
            { _id: req.userId }, // req.userId comes from middleware
            { $addToSet: { purchasedCourses: courseId } } // addToSet avoids duplicates
        );

        res.status(200).json({ message: "Course purchased successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Course purchase failed", error: err.message });
    }
});

//  Get purchased courses of a user
userRouter.get("/purchasedCourses", userMiddleware, async (req, res) => {
    const user = await UserModel.findById(req.userId).populate("purchasedCourses");
    res.status(200).json({ courses: user.purchasedCourses });
});

module.exports = userRouter;
