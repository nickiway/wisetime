import mongoose from "mongoose";

import type { ITag } from "@/types/tag";

import { projectSchema } from "@/db/models/project/Project";
import { tagSchema } from "@/db/models/project/Tag";
import { IProject } from "@/types/project";

export interface ISessionBody {
  date: Date;
  totalTicks: number;
  taskName: string;
  project: IProject;
  selectedTags: Set<mongoose.Types.ObjectId[]> | ITag[];
}

export interface ITimerSession extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  body: ISessionBody;
}

const SessionSchema = new mongoose.Schema<ISessionBody>({
  date: { type: Date, required: true },
  totalTicks: { type: Number, required: true },
  taskName: { type: String, required: true },
  project: projectSchema,
  selectedTags: [{ type: tagSchema }],
});

const schema = new mongoose.Schema<ITimerSession>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: { type: SessionSchema, required: true },
});

export const TimerSession =
  mongoose.models.TimerSession ||
  mongoose.model<ITimerSession>("TimerSession", schema);
