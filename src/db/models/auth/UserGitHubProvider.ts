import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  GitHubID: Number,
  GitHubName: String,
  Email: String,
});

export const UserGitHubProvider =
  mongoose.models.UserGitHubProvider ||
  mongoose.model("UserGitHubProvider", schema);
