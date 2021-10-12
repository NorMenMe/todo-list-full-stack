import mongoose from "mongoose";
import User from "./User.js";
const { Schema, model } = mongoose;

const TodoSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Todo = model("Todo", TodoSchema);

export default Todo;
