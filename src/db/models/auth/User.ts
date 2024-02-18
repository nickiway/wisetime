import mongoose, { Schema, InferSchemaType } from "mongoose";

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  emailVerified: Date,
});

export type UserType = InferSchemaType<typeof schema>;

export const User = mongoose.models?.User || mongoose.model("User", schema);
