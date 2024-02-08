import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  _id: Number,
  GoogleID: Number,
  GoogleName: String,
  Email: String,
});

export const UserGoogle =
  mongoose.models.UserGoogle || mongoose.model("UserGoogle", schema);
