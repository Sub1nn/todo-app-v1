import mongoose from "mongoose";

const dbName = process.env.DB_NAME;
const dbPass = encodeURIComponent(process.env.DB_PASSWORD);
const dbUserName = process.env.DB_USERNAME;

mongoose.connect(
  `mongodb+srv://${dbUserName}:${dbPass}@subin01.bbc2g1d.mongodb.net/${dbName}?retryWrites=true&w=majority`
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export const todo = mongoose.model("todos", todoSchema);
