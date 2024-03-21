"use server";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";
import { TimerSession } from "@/db/models/timer/TimerSessions";
import { ISessionBody } from "@/db/models/timer/TimerSessions";

type StoreTimerSessionResult = ISessionBody;
type StoreTimerSessionProps = {
  totalTicks: number;
  userId: string | undefined;
  taskName: string;
  selectedTags: Set<string>;
  date: Date;
  project: string | undefined;
};

export const storeTimerSession = async ({
  totalTicks,
  userId,
  selectedTags,
  date,
  project,
  taskName,
}: StoreTimerSessionProps): Promise<StoreTimerSessionResult | undefined> => {
  try {
    if (!userId) {
      throw new Error("The user did not provide the id");
    }

    if (totalTicks === 0) {
      throw new Error("The number of ticks is 0");
    }

    await dbConnect();

    const response = await TimerSession.create({
      userId: new ObjectId(userId),
      taskName,
      totalTicks,
      date,
      selectedTags: Array.from(selectedTags),
    });

    const parsedResponse = response.toObject() as ISessionBody;
    return parsedResponse;
  } catch (error) {
    console.error(error);
  }
};