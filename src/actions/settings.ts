"use server";
import * as z from "zod";
import { SettingsProfileSchema } from "@/schemas";
import { Types } from "mongoose";
import { User } from "@/db/models/auth/User";
import { ObjectId } from "mongodb";
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
