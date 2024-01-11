import express from "express";
import { createUser } from "../types.js";
import { User } from "./user.model.js";
import * as bcrypt from "bcrypt";

const router = express.Router();

router.post("/user/register", async (req, res) => {
  const userDetails = req.body;
  const parsedUser = createUser.safeParse(userDetails);
  console.log(parsedUser);
  if (!parsedUser.success) {
    return res.status(400).send({ message: "user validation failed" });
  }
  const user = await User.findOne({ email: parsedUser.data.email });
  if (user) {
    return res
      .status(409)
      .send({ message: "user with the email already exists" });
  }
  try {
    console.log("Password before hashing:", parsedUser.data.password);
    console.log("Password type:", typeof parsedUser.data.password);
    const hashedPassword = await bcrypt.hash(parsedUser.data.password, 10);
    console.log("hashed password: ", hashedPassword);
    parsedUser.data.password = hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
  await User.create(parsedUser.data);
  return res.status(201).send({ message: "user created successfully" });
});

export default router;
