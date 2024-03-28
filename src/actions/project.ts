"use server";
import * as z from "zod";

import { ObjectId } from "mongodb";

import type { Types } from "mongoose";
import type { IProject } from "@/types/project";

import { AddProjectSchema } from "@/schemas";

import { dbConnect } from "@/lib/dbConnect";

import { Project } from "@/db/models/project/Project";
import { Tag } from "@/db/models/project/Tag";
import { User } from "@/db/models/auth/User";

interface UpdateParams {
  _id: string | Types.ObjectId;
  key: string;
  payload: number | string;
  operation: "replace" | "add";
}

export const add = async (
  userId: string | Types.ObjectId,
  values: z.infer<typeof AddProjectSchema>,
  selectedTags: Set<string>
): Promise<IProject | never> => {
  const isValid = AddProjectSchema.safeParse(values);

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

export const update = async ({
  _id,
  key,
  payload,
  operation = "replace",
}: UpdateParams): Promise<IProject | never> => {
  const project = await Project.findById(_id);

  if (!project) {
    throw new Error("The selected project does not exists");
  }

  let updatedValue;

  if (typeof payload === "number") {
    if (operation === "add") {
      updatedValue = project.totalTime + payload;
    } else {
      updatedValue = payload;
    }
  } else {
    updatedValue = payload;
  }

  // Update the document
  const updatedProject = await Project.findByIdAndUpdate(
    _id,
    { [key]: updatedValue },
    { new: true }
  );

  if (!updatedProject) {
    throw new Error("Updating project model failed");
  }

  return updatedProject;
};
