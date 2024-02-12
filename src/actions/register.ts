"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validData = RegisterSchema.safeParse(values);

  if (!validData.success) {
    return { error: "Invalid data implemented" };
  }

  return { success: "Email sent" };
};
