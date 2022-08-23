import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: String,
  todo: String,
  completed: Boolean,
}, {timestamps: true});

export const TodoModel = mongoose.model("Post", schema);
