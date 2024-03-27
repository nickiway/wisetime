"use server";
import * as z from "zod";

import { Types } from "mongoose";
import { AddProjectSchema } from "@/schemas";
import { IProject } from "@/types/project";
import { Project } from "@/db/models/project/Project";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";
import { Tag } from "@/db/models/project/Tag";
import { User } from "@/db/models/auth/User";

export const add = async (
  userId: string | Types.ObjectId,
  values: z.infer<typeof AddProjectSchema>,
  selectedTags: Set<string>
): Promise<IProject | never> => {
  const isValid = AddProjectSchema.safeParse(values);

  console.log("selected tags", selectedTags);
  if (!isValid) throw new Error("The provided data is not valid");
  if (!userId) throw new Error("Relogin to your account");

  await dbConnect();

  const tags = await Tag.find({
    _id: {
      $in: Array.from(selectedTags),
    },
  });

  const createdBy = await User.findById(new ObjectId(userId));
  if (!createdBy) throw new Error("Relogin to your account");

  const response = await Project.create({
    createdBy,
    title: values.title,
    tags: tags,
    totalTime: 0,
    status: "in progress",
  });

  const parsedResponse = response.toObject();

  return parsedResponse;
};
