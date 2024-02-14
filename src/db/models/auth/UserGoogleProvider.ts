import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  GoogleID: Number,
  GoogleName: String,
  Email: String,
});

export const UserGoogleProvider =
  mongoose.models.UserGoogleProvider ||
  mongoose.model("UserGoogleProvider", schema);
