const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRECT = "ilove100xdevs";
const app = express();

app.use(express.json());

//create a array to store the users username and the password;
const users = [];

function logger(req, res, next) {
  console.log(`${req.method} request came`);

  //call the next middleware function
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public_/index.html");
});

app.post("/signup", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    return res.json({
      Message: "You have been already sign up!",
    });
  }
  // Check if the username has at least 5 characters or not
  if (username.length < 5) {
    // Send a response to the client that the username should have at least 5 characters
    return res.json({
      message: "You need to have at least 5 users to sign up",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you have been signup successfully!",
  });
});

app.post("/signin", logger, (req, res) => {
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
      JWT_SECRECT
    );

    return res.json({
      token: token,
      message: "you have been signin successfully!",
    });
  } else {
    res.json({
      message: "invalid credentials ",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    res.json({
      message: "Token is missing!",
    });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRECT);

    req.username = decodedData.username;
    next();
  } catch (error) {
    return res.json({
      message: "Invalid token!",
    });
  }
}

//Create a get request for the the me route
app.get("/me", logger, auth, (req, res) => {
  const currentUser = req.username;

  const foundUser = users.find((user) => user.username === currentUser);

  if (foundUser) {
    return res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    return res.json({
      message: "user not found!",
    });
  }
});

app.listen(3000);
