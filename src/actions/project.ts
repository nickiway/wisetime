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

interface IdParams {
  _id: string | Types.ObjectId;
}

interface UpdateFuncParams extends IdParams {
  key: string;
  payload: number | string;
  operation: "replace" | "add";
}

interface AddFuncParams extends IdParams {
  values: z.infer<typeof AddProjectSchema>;
  selectedTags: Set<string>;
}

// action of adding project
export const add = async ({
  _id,
  selectedTags,
  values,
}: AddFuncParams): Promise<IProject | never> => {
  const isValid = AddProjectSchema.safeParse(values);

  if (!isValid) throw new Error("The provided data is not valid");
  if (!_id) throw new Error("Relogin to your account");

  await dbConnect();

  const tags = await Tag.find({
    _id: {
      $in: Array.from(selectedTags),
    },
  });

  const createdBy = await User.findById(new ObjectId(_id));
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

// action to update the project
export const update = async ({
  _id,
  key,
  payload,
  operation = "replace",
}: UpdateFuncParams): Promise<IProject | never> => {
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
