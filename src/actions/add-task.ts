"use server";
import * as z from "zod";
import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";
import { Task } from "@/db/models/project/Task";
import { AddTaskSchema } from "@/schemas";

export const addTask = async (
  userId: string | undefined,
  value: z.infer<typeof AddTaskSchema>,
  tags: string[] | undefined
): Promise<{ success?: string; error?: string }> => {
  try {
    await dbConnect();

    await Task.create({
      createdBy: new ObjectId(userId),
      title: "test",
    });

    return { success: "The task was created successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Creating the task was failed" };
  }
};
