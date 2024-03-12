"use server";

import * as z from "zod";
import { ObjectId } from "mongodb";
import mongoose, { Types } from "mongoose";

import { AddTagsSchema } from "@/schemas";

import { Tag } from "@/db/models/project/Tag";
import { dbConnect } from "@/lib/dbConnect";

export const addTag = async (
  values: z.infer<typeof AddTagsSchema>,
  userId: string | undefined
) => {
  const validData = AddTagsSchema.safeParse(values);

  if (!validData) return { error: "Incorrect data type" };

  const { title, color, textColor } = values;

  if (!userId)
    return { error: "Can get the user id, please relog in to your account" };

  try {
    await dbConnect();

    const isTagExists = await Tag.findOne({ title });

    if (isTagExists) {
      return { error: "The tag with such a title exists already" };
    }

    const insertedTagDocument = await Tag.create({
      _id: new mongoose.Types.ObjectId(),
      title,
      color,
      textColor,
      createdBy: new ObjectId(userId),
    });

    // convertin to plain object
    const insertedTag = insertedTagDocument.toObject();

    return { success: "The tag was added", insertedTag };
  } catch (error) {
    console.error(error);
    return { error: "something went wrong" };
  }
};

export const deleteTag = async (_id: Types.ObjectId) => {
  try {
    await dbConnect();

    return await Tag.deleteOne({ _id });
  } catch (error) {
    console.error(error);
  }
};

export const deleteAll = async (userId: Types.ObjectId) => {
  try {
    await dbConnect();

    return await Tag.deleteMany({});
  } catch (error) {
    console.error(error);
  }
};
