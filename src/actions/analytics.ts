"use server";
import { dbConnect } from "@/lib/dbConnect";
import { ITimerSession, TimerSession } from "@/db/models/timer/TimerSessions";

import type { IObjectId } from "@/types/general";
import type { DateRange } from "react-day-picker";

export const fetchAnalytics = async (
  _id: IObjectId,
  dateRange: DateRange
): Promise<ITimerSession[] | never> => {
  try {
    // Validate _i
    if (!_id) {
      throw new Error("The id does not exists");
    }

    await dbConnect();

    const timeSessions = (await TimerSession.find({
      userId: _id,
      "body.date": {
        $gte: dateRange.from,
        $lte: dateRange.to,
      },
    }).populate("userId")) as ITimerSession[];

    return timeSessions;
  } catch (error) {
    console.error("error");
    console.error(error);

    throw error;
  }
};
