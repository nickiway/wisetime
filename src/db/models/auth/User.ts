import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  username: String,
  GoogleProviderID: {
    type: Schema.Types.ObjectId,
    ref: "UserGoogleProvider",
  },
  GitHubProviderID: {
    type: Schema.Types.ObjectId,
    ref: "GitHubProbider",
  },
  CredentialsProviderID: {
    type: Schema.Types.ObjectId,
    ref: "UserCredentialsProvider",
  },
});

export const User = mongoose.models.User || mongoose.model("User", schema);
