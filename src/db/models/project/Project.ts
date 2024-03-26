import { Schema, model, models } from "mongoose";
import { IProject } from "@/types/project";
import { tagSchema } from "@/db/models/project/Tag";

export const projectSchema = new Schema<IProject>({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  tags: [tagSchema],
  totalTime: Number,
  status: { type: String, default: "in progress" },
});

export const Project =
  models.Project || model<IProject>("Project", projectSchema);
