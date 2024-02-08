import mongoose, { Schema } from "mongoose";
import { User } from "../auth/User";

const schema = new Schema({
  _id: Number,
  project: { type: mongoose.Types.ObjectId, ref: "Tasks" },
  createdBy: User,
  title: String,
  tags: String,
  time: {
    type: Number,
    default: 0,
  },
  status: Boolean,
  Desctiption: String,
});

export const Task = mongoose.models.Task || mongoose.model("Task", schema);
