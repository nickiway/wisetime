import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  _id: Number,
  Email: String,
  Password: String,
  isEmailConfirmed: Boolean,
});

export const UserCredentialsProvider =
  mongoose.models.UserCredentialsProvider ||
  mongoose.model("UserCredentialsProvider", schema);
