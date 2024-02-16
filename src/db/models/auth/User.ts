import mongoose, { Schema, InferSchemaType } from "mongoose";

const schema = new Schema({
  name: String,

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

export type UserType = InferSchemaType<typeof schema>;

export const User = mongoose.models?.User || mongoose.model("User", schema);
