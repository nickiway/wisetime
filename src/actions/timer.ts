"use server";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";
import { TimerSession } from "@/db/models/timer/TimerSessions";

type StoreTimerSessionResult = { error?: String; result?: String };
type StoreTimerSessionProps = {
  totalTicks: number;
  userId: string | undefined;
  taskName: string;
  selectedTags: Set<string>;
};

export const storeTimerSession = async ({
  totalTicks,
  userId,
  selectedTags,
  taskName,
}: StoreTimerSessionProps): Promise<StoreTimerSessionResult> => {
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
      selectedTags,
    });

    return { result: "Your time progress was saved sucessfully" };
  } catch (error) {
    console.error(error);
    return { error: "Saving your timer results failed" };
  }
};
