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


app.post('/login', async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  })

  if(!response){
    res.status(403).json({
      message: "User Does not exist",
    })
    return
  }

  const passwordMatch = await bcrypt.compare(password, response.password)

  console.log(response);

  if(passwordMatch){
    const token = jwt.sign({
      id:response._id.toString()
    }, JWT_SECRET)
    res.json({
      token: token,
      message: "You have been Login successfully!"
    })
  }else{
    res.status(403).json({
      message: "invalid creds"
    })
  }
})

function auth(req, res, next){
  const token = req.headers.token;

  const response = jwt.verify(token, JWT_SECRET)

  console.log(response)

  if(response){
    req.userId= response.id
    next()
  }else{
    res.status(403).json({
      message: "Invalid creds",
    })
  }
}

app.post('/todos', auth ,async(req, res)=>{
  const userId = req.userId;

  const title = req.body.title;
  const done = req.body.done;


  await TodoModel.create({
    userId,
    title,
    done

  })

  res.json({
    message: "Todo Have been Created!"
  })
})

app.get('/todos', auth, async(req, res)=>{
  const userId = req.userId;
  const todos = await TodoModel.findOne({
    userId
  })

  res.json({
    todos
  })
})


app.listen(3000)