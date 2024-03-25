import mongoose, { Schema, Types } from "mongoose";

export interface TagType {
  _id: Types.ObjectId;
  title: string;
  color: string;
  textColor: string;
  createdBy: { type: mongoose.Types.ObjectId; ref: "User" };
}

export const tagSchema = new Schema<TagType>({
  _id: Types.ObjectId,
  title: String,
  color: String,
  textColor: String,
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const Tag =
  mongoose.models.Tag || mongoose.model<TagType>("Tag", tagSchema);
