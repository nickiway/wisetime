import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  _id: Number,
  GoogleID: Number,
  GoogleName: String,
  Email: String,
});

export const UserGoogleProvider =
  mongoose.models.UserGoogleProvider ||
  mongoose.model("UserGoogleProvider", schema);
