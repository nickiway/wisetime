import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  _id: Number,
  Email: String,
  Password: String,
  isEmailConfirmed: Boolean,
});

export const UserGeneral =
  mongoose.models.UserGeneral || mongoose.model("UserGeneral", schema);
