"use server";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";
import { TimerSession } from "@/db/models/timer/TimerSessions";
import { ISessionBody, ITimerSession } from "@/db/models/timer/TimerSessions";
import { Tag } from "@/db/models/project/Tag";

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

    const tags = await Tag.find({
      _id: {
        $in: Array.from(selectedTags),
      },
    });

    console.log("tags");
    console.log(tags);
    const response = await TimerSession.create({
      userId: new ObjectId(userId),
      body: {
        date,
        selectedTags: tags,
        taskName,
        totalTicks,
      },
    });

    const responseSession = response.toObject();

    return responseSession;
  } catch (error) {
    console.error(error);
  }
};
