const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilove100xdevs";

const app = express();

app.use(express.json());

const users = [];

function loggger(req, res, next) {
  // Log the request method to the console
  console.log(`${req.method} request came`);
  // Call the next middleware function
  next();
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname+ "/public_/index.html");
})

app.post("/signup", loggger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    return res.json({
      message: "You are already signed up!",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You have been signed up successfully!",
  });
});

app.post("/signin", loggger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );

    return res.json({
      token: token,
      message: "You have been sigined successfully",
    });
  } else {
    res.json({
      message: "Invalid username or password!",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.json({
      message: "Token is missing!",
    });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    req.username = decodedData.username;
    next();
  } catch (error) {
    return res.json({
      message: "Invalid token!",
    });
  }
}

app.get("/me", loggger, auth, (req, res) => {
  const currentUser = req.username;

  const foundUser = users.find((user) => user.username === currentUser);

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "invalid token!",
    });
  }
});

app.listen(3000);
