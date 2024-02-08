import mongoose, { Schema, mongo } from "mongoose";
import { User } from "../auth/User";

const schema = new Schema({
  _id: Number,
  createdBy: User,
  title: String,
  tags: String,
  totalTime: {
    type: Number,
    default: 0,
  },
  status: Boolean,
  Desctiption: String,
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", schema);
