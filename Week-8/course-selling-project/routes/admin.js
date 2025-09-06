const { Router } = require("express");

const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");

const { adminMiddleware } = require("../middleware/admin");

const JWT_ADMIN_PASSWORD = "ilove100xadminpassword";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

adminRouter.post("/signup", async (req, res) => {
  const requireBody = zod.object({
    email: zod.string().email().min(5), // email must be valid format and at least 5 character
    password: zod.string().min(5), // password must be at least 5 character
    firstName: zod.string().min(5), // first name must be at least 5 character
    lastName: zod.string().min(3), // lastname must be at least 3 character
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    return res.json({
      message: "Incorrect data format",
      error: parseDataWithSuccess.error,
    });
  }

  const { email, password, firstName, lastName } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await AdminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
  } catch (error) {
    return res.status(400).json({
      message: "You are already signup!",
    });
  }

  res.json({
    message: "You have been Signup Successfully!",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const requireBody = zod.object({
    email: zod.string().min(5).email(),
    password: zod.string().min(5),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    return res.json({
      message: "incorrect Data format",
      error: parseDataWithSuccess.error,
    });
  }

  const { email, password } = req.body;

  const admin = await AdminModel.findOne({
    email,
  });
  if (!admin) {
    return res.status(403).json({
      message: "Invalid credentails",
    });
  }

  const passwordMatch = await bcrypt.compare(password, admin.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.status(200).json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials!",
    });
  }
});

adminRouter.post("/course", (req, res) => {});

adminRouter.put("/course", (req, res) => {});

adminRouter.get("/course/bulk", (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
