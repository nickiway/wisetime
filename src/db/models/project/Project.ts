import { Schema, model, models } from "mongoose";
import { IProject } from "@/types/project";
import { tagSchema } from "@/db/models/project/Tag";
import { userSchema } from "@/db/models/auth/User";

export const projectSchema = new Schema<IProject>({
  createdBy: userSchema,
  title: String,
  tags: [tagSchema],
  totalTime: Number,
  status: { type: String, default: "in progress" },
});

export const Project =
  models.Project || model<IProject>("Project", projectSchema);
