import mongoose, { Schema } from "mongoose";

import { UserGoogleProvider } from "./UserGoogleProvider";
import { UserCredentialsProvider } from "./UserCredentialsProvider";

const schema = new Schema({
  _id: Number,
  name: String,
  GoogleProviderID: UserGoogleProvider,
  CredentialsProviderID: UserCredentialsProvider,
});

export const User = mongoose.models.User || mongoose.model("User", schema);
