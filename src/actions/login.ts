import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.safeParse(values);

  if (!validatedData) {
    return { error: "The data is not valid" };
  }

  return { success: "User Logged in successfully" };
};
