import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "male",
  },
});

export const User = mongoose.model("users", userSchema);
