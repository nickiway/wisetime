import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  email: String,
  password: String,
  emailConfirmed: Boolean,
});

export const UserCredentialsProvider =
  mongoose.models.UserCredentialsProvider ||
  mongoose.model("UserCredentialsProvider", schema);
