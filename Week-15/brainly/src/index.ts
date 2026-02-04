import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cors from "cors";

import { random } from "./utils.js";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { useMiddleware } from "./middleware.js";

const app = express();

app.use(express.json());
app.use(cors());


app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    await UserModel.create({ username, password });

    res.json({ message: "User signed up" });
  } catch (e) {
    res.status(409).json({ message: "User already exists" });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username, password });

  if (!user) {
    return res.status(403).json({ message: "Incorrect credentials" });
  }

  const token = jwt.sign(
    { id: user._id },
    JWT_PASSWORD,
    { expiresIn: "7d" }
  );

  res.json({ token });
});


app.post("/api/v1/content", useMiddleware, async (req, res) => {
  const { link, type } = req.body;

  await ContentModel.create({
    link,
    type,
    userId: req.userId,
    tags: []
  });

  res.json({ message: "Content added" });
});

app.get("/api/v1/content", useMiddleware, async (req, res) => {
  const content = await ContentModel.find({
    userId: req.userId
  }).populate("userId", "username");

  res.json({ content });
});

app.delete("/api/v1/content", useMiddleware, async (req, res) => {
  const { contentId } = req.body;

  await ContentModel.deleteOne({
    _id: contentId,
    userId: req.userId
  });

  res.json({ message: "Deleted" });
});


app.post("/api/v1/brain/share", useMiddleware, async (req, res) => {
  const { share } = req.body;

  if (share) {
    const existingLink = await LinkModel.findOne({
      userId: req.userId
    });

    if (existingLink) {
      return res.json({ hash: existingLink.hash });
    }

    const hash = random(10);

    await LinkModel.create({
      userId: req.userId,
      hash
    });

    return res.json({ hash });
  }

  await LinkModel.deleteOne({
    userId: req.userId
  });

  res.json({ message: "Share link removed" });
});


app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const { shareLink } = req.params;

  const link = await LinkModel.findOne({ hash: shareLink });

  if (!link) {
    return res.status(404).json({ message: "Invalid link" });
  }

  const user = await UserModel.findById(link.userId);
  const content = await ContentModel.find({
    userId: link.userId as mongoose.Types.ObjectId
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    username: user.username,
    content : content
  });
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
