import mongoose, { Schema, InferSchemaType } from "mongoose";

const schema = new Schema({
  email: String,
  password: String,
  emailConfirmed: Boolean,
});

export type UserCredentialsProviderType = InferSchemaType<typeof schema>;

export const UserCredentialsProvider =
  mongoose.models?.UserCredentialsProvider ||
  mongoose.model("UserCredentialsProvider", schema);
