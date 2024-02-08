import mongoose, { Schema } from "mongoose";
import { Dashboard } from "../dashboard/Dashboard";

const schema = new Schema({
  _id: Number,
  dashboardID: Dashboard,
  timeStart: Number,
  timeEnd: Number,
  title: String,
});

export const DashboardInterval =
  mongoose.models.DashboardInterval ||
  mongoose.model("DashboardInterval", schema);
