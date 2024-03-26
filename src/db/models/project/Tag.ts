import mongoose, { Schema, Types } from "mongoose";
import { ITag } from "@/types/tag";

export const tagSchema = new Schema<ITag>({
  _id: Types.ObjectId,
  title: String,
  color: String,
  textColor: String,
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const Tag =
  mongoose.models.Tag || mongoose.model<ITag>("Tag", tagSchema);
