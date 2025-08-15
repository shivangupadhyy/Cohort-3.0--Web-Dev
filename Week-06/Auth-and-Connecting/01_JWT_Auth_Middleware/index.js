const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilove100xdevs";

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    return res.json({
      message: "You are already signed up!",
    });
  }

  users.push({
    username: username,
    password: password
  });

  res.json({
    message: "You have been signed up successfully!",
  });
});

app.post("/signin", (req, res) => {
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

app.get("/me", (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({
      message: "Token is missing!",
    });
  }
  //decode the token using the jwt.decode()  function
//   const decoded = jwt.decode(token);
//   console.log(decoded);

  const userDetails = jwt.verify(token, JWT_SECRET);

  const foundUser = users.find(
    (user) => user.username === userDetails.username
  );
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password
    });
  } else {
    res.json({
      message: "invalid token!",
    });
  }
});

app.listen(3000);
