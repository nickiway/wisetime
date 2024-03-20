import mongoose, { Schema, Types } from "mongoose";

export interface ITimerSession {
  userId: { type: mongoose.Types.ObjectId; ref: "User" };
  totalTicks: number;
  circles: {
    totalTicks: number;
    tocks: number;
  }[];
}

const schema = new Schema<ITimerSession>({
  userId: { type: Types.ObjectId, ref: "User" },
  totalTicks: Number,
  circles: [
    {
      totalTicks: Number,
      ticks: Number,
    },
  ],
});

export const TimerSession =
  mongoose.models.TimerSession || mongoose.model("TimerSession", schema);
