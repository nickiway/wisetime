"use server";

import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";

import { TimerSession } from "@/db/models/timer/TimerSessions";
import { ITimerSession } from "@/db/models/timer/TimerSessions";
import { Tag } from "@/db/models/project/Tag";

interface StoreTimerSessionProps {
  totalTicks: number;
  userId: string;
  taskName: string;
  selectedTags: Set<string>;
  date: Date;
  project: string;
}

export const storeTimerSession = async ({
  totalTicks,
  userId,
  selectedTags,
  date,
  project,
  taskName,
}: StoreTimerSessionProps): Promise<ITimerSession | never> => {
  if (!userId) {
    throw new Error("The user did not provide the id");
  }

  if (taskName.length === 0) {
    throw new Error("Enter task name");
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
};
