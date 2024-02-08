import mongoose, { Schema } from "mongoose";
import { User } from "../auth/User";

const schema = new Schema({
  _id: Number,
  userID: User,
});

export const Dashboard =
  mongoose.models.Dashboard || mongoose.model("Dashboard", schema);
