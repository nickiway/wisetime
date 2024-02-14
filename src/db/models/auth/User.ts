import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  username: String,
  GoogleProviderID: {
    type: Schema.Types.ObjectId,
    ref: "UserGoogleProvider",
  },
  CredentialsProviderID: {
    type: Schema.Types.ObjectId,
    ref: "UserCredentialsProvider",
  },
});

export const User = mongoose.models.User || mongoose.model("User", schema);
