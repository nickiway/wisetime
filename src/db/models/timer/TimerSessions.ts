import mongoose, { Schema, Types } from "mongoose";

export interface ITimerSession {
  userId: { type: mongoose.Types.ObjectId; ref: "User" };
  totalTicks: number;
  taskName: string;
  selectedTags: Set<string>;
}

const schema = new Schema<ITimerSession>({
  userId: { type: Types.ObjectId, ref: "User" },
  totalTicks: Number,
  selectedTags: [String],
  taskName: String,
});

export const TimerSession =
  mongoose.models.TimerSession || mongoose.model("TimerSession", schema);
