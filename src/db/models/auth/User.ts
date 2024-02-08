import mongoose, { Schema } from "mongoose";

import { UserGoogleProvider } from "./UserGoogleProvider";
import { UserGeneralProvider } from "./UserGeneralProvider";

const schema = new Schema({
  _id: Number,
  name: String,
  GoogleProviderID: UserGoogleProvider,
  GeneralProviderID: UserGeneralProvider,
});

export const User = mongoose.models.User || mongoose.model("User", schema);
