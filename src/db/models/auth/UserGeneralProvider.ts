import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  _id: Number,
  Email: String,
  Password: String,
  isEmailConfirmed: Boolean,
});

export const UserGeneralProvider =
  mongoose.models.UserGeneralProvider ||
  mongoose.model("UserGeneralProvider", schema);
