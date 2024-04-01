"use server";

import * as z from "zod";
import { SettingsProfileSchema } from "@/schemas";

export const updateGeneralSettigns = async (
  value: z.infer<typeof SettingsProfileSchema>
) => {
  const isValid = SettingsProfileSchema.safeParse(value);

  if (!isValid) throw new Error("The data validation was failed");

  console.log(value);
  return true;
};
