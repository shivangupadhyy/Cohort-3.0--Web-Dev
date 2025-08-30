const express = require("express");
const bcrypt = require("bcrypt");
const z = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilove100xdev";
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://shivang14071993:4FfCt1jEXdf1M7OH@cluster0.rajcklb.mongodb.net/todo-app-test"
);

app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z
      .string()
      .min(5)
      .max(100)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      ),
    name: z.string().min(3).max(50),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "incorrect Format",
      error: parsedDataWithSuccess.error,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  try{
   const hassedPassword = await bcrypt.hash(password, 5);
    console.log(hassedPassword);
    await UserModel.create({
      email: email,
      password: hassedPassword,
      name: name
    })
    res.json({
      message: "You have been signup successfully"
    })
  }catch(error){
    res.status(500).json({
      message: 'Duplicate details are not allowed : ', error
    })
  }
});
