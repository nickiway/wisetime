import mongoose, { Schema } from "mongoose";

export interface IVerificationToken extends mongoose.Document {
  email: string;
  token: string;
  expiers: Date;
}

const schema = new Schema<IVerificationToken>({
  email: { type: String, required: true },
  token: { type: String, required: true },
  expiers: { type: Date, required: true },
});

export const VerificationToken =
  mongoose.models?.VerificationToken ||
  mongoose.model("VerificationToken", schema);
