import mongoose, { Schema } from "mongoose";

export interface ISessionBody {
  date: Date;
  totalTicks: number;
  taskName: string;
  selectedTags: Set<string>;
}

export interface ITimerSession extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  session: ISessionBody;
}

const SessionSchema = new Schema<ISessionBody>({
  date: { type: Date, required: true },
  totalTicks: { type: Number, required: true },
  taskName: { type: String, required: true },
  selectedTags: { type: [String], required: true },
});

const schema = new Schema<ITimerSession>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  session: { type: SessionSchema, required: true },
});

export const TimerSession =
  mongoose.models.TimerSession || mongoose.model("TimerSession", schema);
