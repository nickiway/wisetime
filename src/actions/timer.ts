"use server";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";
import { TimerSession } from "@/db/models/timer/TimerSessions";
import { ISessionBody, ITimerSession } from "@/db/models/timer/TimerSessions";

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
  console.log("running action");
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
      body: {
        date,
        selectedTags: Array.from(selectedTags),
        taskName,
        totalTicks,
      },
    });

    const responseSession = response.body.toObject();

    const result = {
      date: responseSession.date,
      selectedTags: new Set(responseSession.selectedTags),
      taskName: responseSession.taskName,
      totalTicks: responseSession.totalTicks,
    } as ISessionBody;

    return result;
  } catch (error) {
    console.error(error);
  }
};
