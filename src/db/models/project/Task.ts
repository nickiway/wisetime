import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  _id: Number,
  project: { type: mongoose.Types.ObjectId, ref: "Tasks" },
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
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
