"use server";

import type { Types } from "mongoose";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";

import { TimerSession } from "@/db/models/timer/TimerSessions";
import { ITimerSession } from "@/db/models/timer/TimerSessions";
import { Tag } from "@/db/models/project/Tag";
import { update } from "@/actions/project";

interface StoreTimerSessionProps {
  totalTicks: number;
  userId: string;
  taskName: string;
  selectedTags: Set<string>;
  date: Date;
  projectId: Types.ObjectId | string;
}

export const storeTimerSession = async ({
  totalTicks,
  userId,
  selectedTags,
  date,
  projectId,
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

  // updating project and getting it as response
  const updatedProject = await update({
    _id: projectId,
    key: "totalTime",
    operation: "add",
    payload: totalTicks,
  });

  const response = await TimerSession.create({
    userId: new ObjectId(userId),
    body: {
      date,
      selectedTags: tags,
      taskName,
      totalTicks,
      project: updatedProject,
    },
  });

  const responseSession = response.toObject();

  return responseSession;
};
