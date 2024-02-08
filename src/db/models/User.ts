import mongoose, { Schema } from "mongoose";

import { UserGoogle } from "./UserGoogle";
import { UserGeneral } from "./UserGeneral";

const schema = new Schema({
  _id: Number,
  name: String,
  GoogleProviderID: UserGoogle,
  GeneralProviderID: UserGeneral,
});

export const User = mongoose.models.User || mongoose.model("User", schema);
