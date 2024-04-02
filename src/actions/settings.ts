"use server";

import * as z from "zod";
import type { Types } from "mongoose";
import { ObjectId } from "mongodb";

import { SettingsProfileSchema } from "@/schemas";

import { User } from "@/db/models/auth/User";
import { Settings } from "@/db/models/Settings";

import { dbConnect } from "@/lib/dbConnect";

interface IUpdateCloudinaryProfilePhoto {
  _id: Types.ObjectId | string | undefined;
  event?: string;
  info?: any;
}
export const updateCloudinaryProfilePhoto = async ({
  event,
  info,
  _id,
}: IUpdateCloudinaryProfilePhoto): Promise<{
  url?: string;
  error?: string;
  success?: string;
}> => {
  try {
    if (!event || !info) throw new Error("The image upload failed");
    if (event !== "success") throw new Error("The image upload failed");
    if (!_id || !ObjectId.isValid(_id)) throw new Error("Try to relogin");

    const image = info.url as string;

    await dbConnect();
    await User.updateOne({ _id: new ObjectId(_id) }, { image });

    return { success: "The image was updated successfully", url: image };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};

// updating general profile data
export const updateSettingsProfile = async (
  _id: Types.ObjectId | string,
  values: z.infer<typeof SettingsProfileSchema>
): Promise<{
  error?: string;
  success?: string;
}> => {
  try {
    const isDataValid = SettingsProfileSchema.safeParse(values);

    if (!isDataValid) return { error: "Incorrect data" };

    await dbConnect();
    await Settings.updateOne(
      { createdBy: _id },
      { $set: { "profile.username": values.firstName } }
    );

    return { success: "Profile data was updated" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
