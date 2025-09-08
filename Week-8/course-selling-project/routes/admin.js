const { Router } = require("express");

const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");

const { adminMiddleware } = require("../middleware/admin");

const { JWT_ADMIN_PASSWORD } = require("../config");
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
      message : "You have Signin successfully!"
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials!",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const requireBody = zod.object({
    title: zod.string().min(3),
    description: zod.string().min(10),
    imageUrl: zod.string().url(),
    price: zod.number().positive(),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    return res.json({
      message: "Incorrect data format",
      error: parseDataWithSuccess.error,
    });
  }

  const { title, description, imageUrl, price } = req.body;

  const course = await CourseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId: adminId,
  });

  res.status(200).json({
    message: "Course created!",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const requireBody = zod.object({
    courseId: zod.string().min(5),
    title: zod.string().min(3).optional(),
    description: zod.string().min(5).optional(),
    imageUrl: zod.string().min(5).url().optional(),
    price: zod.number().positive().optional(),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    return res.json({
      message: "Incorrect data Format",
      error: parseDataWithSuccess.error,
    });
  }

  const { courseId, title, description, imageUrl, price } = req.body;

  const course = await CourseModel.findOne({
    _id: courseId,
    creatorId: adminId,
  });

  if (!course) {
    return res.status(404).json({
      message: "Course not Found!",
    });
  }

  await CourseModel.updateOne(
    {
      id: courseId,
      creatorId: adminId,
    },
    {
      title: title || course.title,
      description: description || course.description,
      imageUrl: imageUrl || course.imageUrl,
      price: price || course.price,
    }
  );

  res.status(200).json({
    message: "Course Updated!",
  });
});

adminRouter.get("/course/bulk",adminMiddleware, async(req, res) => {

  const adminId = req.adminId;

  const courses = await CourseModel.findOne({
    creatorId : adminId,
  })

  res.json({
    courses
  })
});

module.exports = {
  adminRouter: adminRouter,
};
