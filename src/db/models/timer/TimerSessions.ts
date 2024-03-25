import mongoose from "mongoose";

import { TagType } from "../project/Tag";
import { tagScema } from "@/db/models/project/Tag";

export interface ISessionBody {
  date: Date;
  totalTicks: number;
  taskName: string;
  selectedTags: Set<mongoose.Types.ObjectId[]> | TagType[];
}

export interface ITimerSession extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  body: ISessionBody;
}

const SessionSchema = new mongoose.Schema<ISessionBody>({
  date: { type: Date, required: true },
  totalTicks: { type: Number, required: true },
  taskName: { type: String, required: true },
  selectedTags: [{ type: tagScema }],
});

const schema = new mongoose.Schema<ITimerSession>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: { type: SessionSchema, required: true },
});

export const TimerSession =
  mongoose.models.TimerSession ||
  mongoose.model<ITimerSession>("TimerSession", schema);
