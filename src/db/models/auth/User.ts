import mongoose, { Schema, InferSchemaType, Document } from "mongoose";

export const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  emailVerified: Date,
});

export type UserType = InferSchemaType<typeof userSchema> & Document;

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
